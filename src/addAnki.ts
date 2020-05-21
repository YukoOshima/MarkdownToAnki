import axios from "axios";
import { md } from "./markdown";
import { markdown } from "./style";

const url = "http://127.0.0.1:8765";

export async function createCard(front: string, back: string, deck = "temp") {
  const resp = await axios.post(url, {
    action: "addNote",
    version: 6,
    params: {
      note: {
        deckName: deck,
        modelName: "Basic",
        fields: {
          Front: front,
          Back: back,
        },
        options: {
          allowDuplicate: false,
          duplicateScope: "deck",
        },
      },
    },
  });
  return resp.data;
}

export const addCardToAnki = async (ankiCards: string[], deckName: string) => {
  const addCardPromise = [];
  while (ankiCards.length) {
    const newCards = ankiCards.splice(0, 2);
    const front = md.render(newCards[0]) + markdown;
    const back = md.render(newCards[1]) + markdown;
    addCardPromise.push(createCard(front, back, deckName));
  }
  return await Promise.all(addCardPromise);
};
