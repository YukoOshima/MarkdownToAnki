import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import { style } from "./style";

function normalizeHighlightLang(lang: string | undefined) {
  switch (lang && lang.toLowerCase()) {
    case "tsx":
    case "typescriptreact":
      return "jsx";
    case "json5":
    case "jsonc":
      return "json";
    case "c#":
    case "csharp":
      return "cs";
    default:
      return lang;
  }
}

export const md: MarkdownIt = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (str: string, lang?: string) => {
    lang = normalizeHighlightLang(lang);
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          style +
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }
    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
  // highlight: (str, lang) => {
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return (
  //         style +
  //         '<pre class="hljs"><code>' +
  //         hljs.highlight(lang, str, true).value +
  //         "</code></pre>"
  //       );
  //     } catch (__) {}
  //   }
  //   return (
  //     '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
  //   );
  // },
}).enable("image");
