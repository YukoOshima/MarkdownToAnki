#! /usr/bin/env node

import { getMarkdownContent } from "./renderMarkdownToCard";
import { postAnkiConnect } from "./addAnki";
import { generateCardsToAnki } from "./convertMarkdownToCard";
import path from "path";
import { scanImgs } from "./scanPicName";

const picPath = process.cwd();
const fileName = process.argv[2];
const deckName = process.argv[3];
console.log(`picPath : ${picPath}`);
console.log(`fileName : ${fileName}`);
console.log(`deckName : ${deckName}`);

if (
  process.argv.length !== 3 &&
  (typeof fileName !== "string" || typeof deckName !== "string")
) {
  console.log("Please input filename | deckName");
}
async function main() {
  try {
    const picBody = await scanImgs(picPath);
    const markdownContent = await getMarkdownContent(fileName);
    const cardBody = await generateCardsToAnki(markdownContent, deckName);
    const ankiResp = await postAnkiConnect([...picBody, ...cardBody]);
    console.log(ankiResp);
  } catch (err) {
    console.log(err);
  }
}

main();
