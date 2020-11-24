import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import {normalizeHighlightLang} from "./util";

const deck = /(?<=Deck:)\w.*/gm;

let md: MarkdownIt;
md = new MarkdownIt({
  html: true,
  highlight: (str: string, lang?: string) => {
    lang = normalizeHighlightLang(lang);
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<div>${hljs.highlight(lang, str, true).value}</div>`;
      }
      catch (error) { }
    }
    return `<code><div>${md.utils.escapeHtml(str)}</div></code>`;
  }
});


export function parseNote(content: string) {
  const matchString = content.match(deck);
  let targetDeck = 'Default';
  if (matchString && matchString.length > 0) {
    targetDeck = matchString[0];
  }
  console.log(targetDeck);
  const lineArray = content.split('\n');
  let cardContent = {q: '', a: ''};

  const cardContentArray: Array<typeof cardContent> = [];
  let first = true;
  let pointer: keyof typeof cardContent = 'q';
  for (const line of lineArray) {
    const lowerLine = line.toLowerCase();
    if (lowerLine.includes('q:')) {
      if (!first) {
        cardContentArray.push(cardContent);
      }
      if (first) {
        first = false;
        pointer = 'q';
      }
      cardContent = {q: '', a: ''};
      cardContent[pointer] += line.slice(2);

      continue;
    }
    if (lowerLine.includes('a:')) {
      pointer = 'a';
    }
    if (!first) {
      cardContent[pointer] += line + '\n';
    }
  }
  cardContentArray.push(cardContent);
  return {targetDeck, cardContentArray};
}


export function convertToMarkdown(cardContentArray: {q: string, a: string}[]) {
  return cardContentArray.map((item) => {
    return {
      q: md.render(item.q),
      a: md.render(item.a)
    }
  });
}
