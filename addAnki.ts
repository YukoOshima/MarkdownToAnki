import axios from "axios";

const url = "http://127.0.0.1:8765";

export function createCard(front: string, back: string, deck = "temp") {
  return axios.post(url, {
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
}
