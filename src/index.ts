#! /usr/bin/env node

import { processLineByLine } from "./processLineByLine";
import { addCardToAnki } from "./addAnki";

const fileName = process.argv[2];
const deckName = process.argv[3];
console.log(`fileName : ${fileName}`);
console.log(`deckName : ${deckName}`);

if (
  process.argv.length !== 3 &&
  (typeof fileName !== "string" || typeof deckName !== "string")
) {
  console.log("Please input filename | deckName");
}

processLineByLine(fileName).then((ankiCards) => {
  addCardToAnki(ankiCards, deckName).then((resp) => {
    console.log(resp);
  });
});
