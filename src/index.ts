import {Command} from "commander";
import fs from "fs";
import path from "path";
import {convertToMarkdown, parseNote} from "./parse";
import {createAddNoteBody} from "./action";
import { postToAnki } from "./util";

const program = new Command();

program.command("file <source>").action(async (source: string) => {
    const filePath = path.resolve(source);
    if (fs.existsSync(filePath)) {
        const resource = fs.readFileSync(filePath, {encoding: "utf-8"});
        const {targetDeck, cardContentArray} = parseNote(resource);
        const markdownContent = convertToMarkdown(cardContentArray);
        const body = createAddNoteBody(targetDeck, 'markdown', markdownContent)
        const resp = await postToAnki(body);
        console.log(resp)
    }
});

program.parse(process.argv);
