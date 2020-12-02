#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";
import path from "path";
import { convertToMarkdown, parseNote } from "./parse";
import { createAddNoteBody } from "./action";
import { postToAnki } from "./util";
import { createUploadImageBody } from "./convertImg";

const program = new Command();

program
  .command("file <source> <img>")
  .action(async (source: string, img: string) => {
    console.log(source);
    console.log(img);
    const uploadImgBody = await createUploadImageBody(img);
    const uploadResp = await postToAnki(uploadImgBody);
    console.log(uploadResp);
    console.log(uploadImgBody.map((item) => item.params.filename));
    const filePath = path.resolve(source);
    if (fs.existsSync(filePath)) {
      const resource = fs.readFileSync(filePath, { encoding: "utf-8" });
      const { targetDeck, cardContent } = parseNote(resource);
      const markdownContent = convertToMarkdown(cardContent);

      let body = createAddNoteBody(targetDeck, "Basic", markdownContent);
      const resp = await postToAnki(body);
      console.log("targetDeck", targetDeck);
      console.log("resp", resp);
    }
  });

program.parse(process.argv);
