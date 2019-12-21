const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/my-app/runtime.js',
    './dist/my-app/polyfills.js',
    './dist/my-app/main.js'
  ];

  await fs.ensureDir('src');
  await concat(files, 'src/sample-element.js');
  // await fs.copyFile(
  //   './dist/air/styles.css',
  //   'elements/login-element.styles.css'
  // );
})();