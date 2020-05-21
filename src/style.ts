export const style = `<style>.hljs{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}</style>`;

export const markdown = `<style>
table{border-collapse:collapse;border-spacing:0;
  margin-top: 0.8rem;
  margin-bottom: 1.4rem;
}
tr{  background-color: #fff;
  border-top: 1px solid #ccc;}
th,td{padding: 5px 14px;
  border: 1px solid #ddd;}

  /* Sspai Web Theme A theme to [sspai](ssp.ai) default theme. Developed by Codegass(wchweichenhao@gmial.com) & Yves(yves@sspai.com) Download Cuto on the App Store and Google Play! */

  body {
    font-size: 15px;
    color: #333;
    background: #fff;
    font-family: Helvetica, Arial, "PingFang SC", "Microsoft YaHei", "WenQuanYi Micro Hei", "tohoma,sans-serif";
    margin: 0;
    padding: 10%;
  }
  h1 {
    font-size: 2.2em;
    font-weight: 700;
    line-height: 1.1;
    padding-top: 16px;
    margin-bottom: 4px;
  }
  h2, h3, h4, h5, h6 {
    line-height: 1.5em;
    margin-top: 2.2em;
    margin-bottom: 4px;
  }
  h2 {
    font-size: 1.4em;
    margin: 40px 10px 20px 0;
    padding-left: 9px;
    border-left: 6px solid #ff7e79;
    font-weight: 700;
    line-height: 1.4;
  }
  h3 {
    font-weight: 700;
    font-size: 1.2em;
    line-height: 1.4;
    margin: 10px 0 5px;
    padding-top: 10px;
  }
  h4 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.1em;
    line-height: 1.4;
    margin: 10px 0 5px;
    padding-top: 10px
  }
  h5, h6 {
    font-size: .9em;
  }
  h5 {
    font-weight: bold;
    text-transform: uppercase;
  }
  h6 {
    font-weight: normal;
    color: #AAA;
  }
  img {
    width: 100%;
    border-radius: 5px;
    display: block;
    margin-bottom: 15px;
    height: auto;
  }
  dl, ol, ul {
    margin-top: 12px;
    margin-bottom: 20px;
    padding-left: 5%;
    line-height: 1.8;
  }
  p {
    margin: 0 0 20px;
    padding: 0;
    line-height: 1.8;
  }
  a {
    color: #f22f27;
    text-decoration: none;
  }
  a:hover {
    color: #f55852;
    text-decoration: underline;
  }
  a:focus {
    outline-offset: -2px;
  }
  blockquote {
    font-size: 1em;
    font-style: normal;
    padding: 30px 38px;
    margin: 0 0 15px;
    position: relative;
    line-height: 1.8;
    text-indent: 0;
    border: none;
    color: #888;
  }
  blockquote:before {
    content: "“";
    left: 12px;
    top: 0;
    color: #E0E0E0;
    font-size: 4em;
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
    position: absolute;
  }
  blockquote:after {
    content: "”";
    right: 12px;
    bottom: -26px;
    color: #E0E0E0;
    font-size: 4em;
    font-family: Arial, serif;
    line-height: 1em;
    font-weight: 700;
    position: absolute;
    bottom: -31px;
  }
  strong, dfn {
    font-weight: 700;
  }
  em, dfn {
    font-style: italic;
    font-weight: 400;
  }
  del {
    text-decoration: line-through;
  }
  /*code {font-size:90%;}*/
  
  /*pre {text-align:left; overflow-x: scroll; color: #257fa0; background: #f6f6f6; padding: 10pt 15pt; border-radius: 3px; border: solid 1px #e2e2e2;}*/
  
  pre {
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857;
    word-break: break-all;
    word-wrap: break-word;
    border-radius: 4px;
    white-space: pre-wrap;
    display: block;
    background: #f8f8f8;
    padding: 10px 20px;
    border: none;
    margin-bottom: 25px;
    color: #666;
    font-family: Courier, sans-serif;
  }
  code {
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    padding: 2px 4px;
    font-size: 90%;
  }
  p>code {
    color: #c7264e;
    background-color: #f9f2f4;
    font-size: .95em;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
  }
  figure {
    margin: 1em 0;
  }
  figcaption {
    font-size: 0.75em;
    padding: 0.5em 2em;
    margin-bottom: 2em;
  }
  figure img {
    margin-bottom: 0px;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  ol p, ul p {
    margin-bottom: 0px;
  }
  li {
    margin-bottom: 0.75em;
    margin-top: 0.75em;
  }
  ol#footnotes {
    font-size: 0.95em;
    padding-top: 1em;
    margin-top: 1em;
    margin-left: 0;
    border-top: 1px solid #eaeaea;
    counter-reset: footer-counter;
    list-style: none;
    color: #555;
    padding-left: 5%;
    margin: 20px 0;
  }
  ol#footnotes li {
    margin-bottom: 10px;
    margin-left: 16px;
    font-weight: 400;
    line-height: 2;
    list-style-type: none;
  }
  ol#footnotes li:before {
    content: counter(footer-counter) ". ";
    counter-increment: footer-counter;
    font-weight: 800;
    font-size: .95em;
  }
  @keyframes highfade {
    0% {
      background-color: none;
    }
    20% {
      background-color: yellow;
    }
    100% {
      background-color: none;
    }
  }
  @-webkit-keyframes highfade {
    0% {
      background-color: none;
    }
    20% {
      background-color: yellow;
    }
    100% {
      background-color: none;
    }
  }
  a:target, ol#footnotes li:target, sup a:target {
    animation-name: highfade;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    -webkit-animation-name: highfade;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
  }
  a:target {
    border: 0;
    outline: 0;
  }
  animation-iteration-count: 1;
  -webkit-animation-timing-function: ease-in-out;
  }
  a:target {
    border: 0;
    outline: 0;
  }
  tion-iteration-count: 1;
  -webkit-animation-timing-function: ease-in-out;
  }
  a:target {
    border: 0;
    outline: 0;
  }


</style>`;
