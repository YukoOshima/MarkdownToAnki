import { md } from "./markdown";
import { createCard } from "./addAnki";

const { once } = require("events");
const { createReadStream } = require("fs");
const { createInterface } = require("readline");

(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: createReadStream("test.md"),
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
    const ankiCards = cards.slice(1);
    console.log(ankiCards.length);

    while (ankiCards.length) {
      const newCards = ankiCards.splice(0, 2);
      const front = md.render(newCards[0]);
      const back = md.render(newCards[1]);
      createCard(front, back, "temp");
      console.log(newCards);
    }

    console.log("File processed.");
  } catch (err) {
    console.error(err);
  }
})();
