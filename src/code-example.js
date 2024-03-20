// @ts-check
const codeExample = `const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};`;

/** @param {HTMLElement | null} webpackExamplePre */
export function insertExample(webpackExamplePre) {
  const codeEl = document.createElement("code");
  codeEl.innerText = codeExample;
  webpackExamplePre?.appendChild(codeEl);
}
