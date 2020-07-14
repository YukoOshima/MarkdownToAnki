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
    console.log(markdownContent);
    const cardBody = await generateCardsToAnki(markdownContent, deckName);
    console.log("upload cardbody");
    const cardResp = await postAnkiConnect(cardBody);
    console.log(cardResp);
    console.log("upload images");
    const imageResp = await postAnkiConnect(picBody);
    console.log(imageResp);
    // const ankiResp = await postAnkiConnect([cardBody[0]]);
  } catch (err) {
    console.log(err);
  }
}

main();
