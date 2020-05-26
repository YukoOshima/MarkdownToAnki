import { md } from "./markdown";
import { markdown } from "./style";

export function generateAddNode(front: string, back: string, deck = "temp") {
  return {
    action: "addNote",
    version: 6,
    params: {
      note: {
        deckName: deck,
        modelName: "markdown",
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
  };
}

export const generateCardsToAnki = async (
  markdownArray: string[],
  deckName: string
) => {
  const cardBodys: any[] = [];
  while (markdownArray.length) {
    const newCards = markdownArray.splice(0, 2);
    const front = md.render(newCards[0]);
    const back = md.render(newCards[1]);
    const newCard = generateAddNode(front, back, deckName);
    cardBodys.push(newCard);
  }
  return cardBodys;
};
