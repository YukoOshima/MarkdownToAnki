import { md } from "./markdown";
import { once } from "events";
import { createReadStream } from "fs";
import { createInterface } from "readline";

export async function getMarkdownContent(fileName: string) {
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
    });
    await once(rl, "close");
    return cards;
  } catch (err) {
    console.error(err);
    return [];
  }
}
