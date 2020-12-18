import MarkdownIt from "markdown-it";
import highlightJS from "highlight.js";
import { normalizeHighlightLang } from "./utils/util";
import { convertImgPath } from "./convertImg";

const deckRgx = /(?<=ANKISTART:).*/gm;
const cardRawContentRgx = /(?<=ANKISTART)[\s\S]*(?=ANKIEND)/gm;

let md: MarkdownIt;
md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str: string, lang?: string) => {
    lang = normalizeHighlightLang(lang);
    if (lang && highlightJS.getLanguage(lang)) {
      try {
        return `<div>${highlightJS.highlight(lang, str, true).value}</div>`;
      } catch (error) {}
    }
    return `<code><div>${md.utils.escapeHtml(str)}</div></code>`;
  },
});

function parseBlockContent(cardBlock: string) {
  const contentArray = cardBlock.split("\n").slice(1);

  const cardArray: Array<typeof card> = [];
  let card = { q: "", a: "" };

  let first = true;
  let pointer: keyof typeof card = "q";
  for (const eachLine of contentArray) {
    if (eachLine.toLowerCase().includes("q:")) {
      pointer = "q";
      if (!first) {
        cardArray.push(card);
        card = { q: "", a: "" };
      }
      if (first) {
        first = false;
      }
      card[pointer] += eachLine.slice(2);
      continue;
    }
    if (eachLine.toLowerCase().includes("a:")) {
      pointer = "a";
      card[pointer] += eachLine.slice(2);
      continue;
    }
    card[pointer] += eachLine + "\n";
  }
  cardArray.push(card);
  return cardArray;
}

export function parseNote(content: string) {
  const matchString = content.match(deckRgx);
  let targetDeck = "Default";
  if (matchString && matchString.length > 0) {
    targetDeck = matchString[0].trim();
  }
  let rawCardContent = content.match(cardRawContentRgx);

  if (rawCardContent) {
    const cardContent = parseBlockContent(rawCardContent[0]);

    return { targetDeck, cardContent };
  } else {
    return { targetDeck: "", cardContent: [] };
  }
}

export function convertToMarkdown(
  cardContentArray: { q: string; a: string }[]
) {
  return cardContentArray.map((item) => {
    return {
      q: md.render(item.q),
      a: convertImgPath(md.render(item.a)),
    };
  });
}
