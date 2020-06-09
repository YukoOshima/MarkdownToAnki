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
      if (line.toLowerCase().indexOf("q:") !== -1) {
        index++;
      }
      if (line.toLowerCase().indexOf("a:") !== -1) {
        index++;
      }
      if (index === -1) return;
      if (!cards[index]) cards[index] = "";
      cards[index] += line;
    });
    await once(rl, "close");
    return cards;
  } catch (err) {
    console.error(err);
    return [];
  }
}
