import fs from "fs";
import { convertToMarkdown, parseNote } from "../parse";
import { createAddNoteBody } from "../action";
import { postToAnki } from "./util";

export async function createAnkiCard(filePath: string) {
  if (fs.existsSync(filePath)) {
    const resource = fs.readFileSync(filePath, { encoding: "utf-8" });
    const { targetDeck, cardContent } = parseNote(resource);
    if (targetDeck) {
      const markdownContent = convertToMarkdown(cardContent);

      let body = createAddNoteBody(targetDeck, "markdown", markdownContent);
      const resp = await postToAnki(body);
      console.log("targetDeck", targetDeck);
      console.log("resp", resp);
    }
  }
}
