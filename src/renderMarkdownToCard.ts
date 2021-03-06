import { md } from "./markdown";
import { once } from "events";
import { createReadStream } from "fs";
import { createInterface } from "readline";

const normalCard = {
  Q: "",
  A: "",
};

const clozeCard = {
  C: "",
};

export async function getMarkdownContent(fileName: string) {
  try {
    const rl = createInterface({
      input: createReadStream(fileName),
      crlfDelay: Infinity,
    });
    const cards: any[] = [];
    // let index = -1;
    let newCard: any;
    let cursor: keyof typeof normalCard | keyof typeof clozeCard = "Q";
    rl.on("line", (line: string) => {
      const qIndex = line.toLowerCase().indexOf("q:");
      const aIndex = line.toLowerCase().indexOf("a:");
      const cIndex = line.toLowerCase().indexOf("c:");
      if (qIndex !== -1) {
        newCard && cards.push(newCard);
        newCard = { ...normalCard };
        cursor = "Q";
        line = line.slice(qIndex + 2).trimLeft();
      }
      if (aIndex !== -1) {
        cursor = "A";
        line = line.slice(aIndex + 2).trimLeft();
      }
      if (cIndex !== -1) {
        newCard && cards.push(newCard);
        newCard = { ...clozeCard };
        cursor = "C";
        line = line.slice(cIndex + 2).trimLeft();
      }
      console.log(line);
      if (newCard) {
        newCard[cursor] += line + "  \n\r";
      }
    });
    await once(rl, "close");
    cards.push(newCard);
    console.log(cards);
    return cards;
  } catch (err) {
    console.error(err);
    return [];
  }
}
