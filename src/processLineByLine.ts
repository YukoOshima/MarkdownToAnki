import { md } from "./markdown";
import { createCard } from "./addAnki";
import { once } from "events";
import { createReadStream } from "fs";
import { createInterface } from "readline";

export async function processLineByLine(fileName: string) {
  try {
    const rl = createInterface({
      input: createReadStream(fileName),
      crlfDelay: Infinity,
    });
    const cards: string[] = [];
    let index = -1;
    rl.on("line", (line: string) => {
      if (line.toLowerCase().indexOf("### q:") !== -1) {
        index++;
      }
      if (line.toLowerCase().indexOf("### a:") !== -1) {
        index++;
      }
      if (typeof cards[index] === "undefined") cards[index] = "";
      cards[index] += line + "\n";
      console.log(cards[index]);
    });
    await once(rl, "close");
    console.log(cards);
    return cards;
  } catch (err) {
    console.error(err);
    return [];
  }
}
