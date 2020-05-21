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
    let index = 0;
    rl.on("line", (line: string) => {
      if (line.toLowerCase().indexOf("### q") !== -1) {
        index++;
        return;
      }
      if (line.toLowerCase().indexOf("### a") !== -1) {
        index++;
        return;
      }
      if (typeof cards[index] === "undefined") cards[index] = "";
      cards[index] += line + "\n";
    });
    await once(rl, "close");
    return cards.slice(1);
  } catch (err) {
    console.error(err);
    return [];
  }
}
