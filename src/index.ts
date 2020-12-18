#!/usr/bin/env node

import { Command } from "commander";
import path from "path";
import { createAnkiCard } from "./utils/createAnkiCard";
import { getFiles } from "./utils/getFiles";
import { uploadImages } from "./utils/uploadImages";

const program = new Command();

program
  .command("file <source> <img>")
  .action(async (source: string, img: string) => {
    console.log(source);
    console.log(img);
    const uploadResp = await uploadImages(img);
    console.log(uploadResp);
    const filePath = path.resolve(source);
    await createAnkiCard(filePath);
  });

program
  .command("path <source> <img>")
  .action(async (source: string, img: string) => {
    const assetPath = path.resolve(img);
    const uploadResp = await uploadImages(assetPath);
    console.log(uploadResp);
    const filesPath = getFiles(source);
    console.log(filesPath);
    const resp = await Promise.all(
      filesPath.map((eachFilePath) => createAnkiCard(eachFilePath))
    );
    console.log(resp);
  });

program.parse(process.argv);
