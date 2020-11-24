export function createAddNoteBody(deck: string, modelName: string, cardContentArray: { q: string, a: string }[]) {
    return {
        "action": "addNotes",
        "version": 6,
        "params": {
            "notes": cardContentArray.map((item) => {
                return {
                    "deckName": deck,
                    "modelName": modelName,
                    "fields": {
                        "Front": item.q,
                        "Back": item.a
                    },
                }

            })
        }
    }
}