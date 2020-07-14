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

export function generateAddClozeNode(content: string, deck = "temp") {
  return {
    action: "addNote",
    version: 6,
    params: {
      note: {
        deckName: deck,
        modelName: "markdownCloze",
        fields: {
          content,
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
  markdownArray: object[],
  deckName: string
) => {
  const cardBodys: any[] = [];
  // console.log("markdownArray", markdownArray);
  while (markdownArray.length) {
    const cardMarkdownContent: any = markdownArray.pop();
    let cardAnkiBody = {};
    if (cardMarkdownContent.Q) {
      cardAnkiBody = generateAddNode(
        md.render(cardMarkdownContent.Q),
        md.render(cardMarkdownContent.A),
        deckName
      );
    } else if (cardMarkdownContent.C) {
      cardAnkiBody = generateAddClozeNode(
        md.render(cardMarkdownContent.C),
        deckName
      );
    }
    cardBodys.push(cardAnkiBody);
  }
  return cardBodys;
};
