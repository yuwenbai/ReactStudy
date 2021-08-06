#! /usr/bin/env node

import { globbySync } from "globby";
import { readFileSync, writeFileSync } from "fs";
// import * as asnc from 'globby'
import { resolve } from "path";
import { program } from "commander";
import jscodeshift from "jscodeshift";
// const { resolve } = require("path");
// const { sync } = Import from "globby"
// const sync = require('globby')
// const { program } = require("commander");

program.version("0.0.1").option("-o, --out <path>", "output root path");

program.on("--help", () => {
  console.log(`
  You can add the following commands to npm scripts:
 ------------------------------------------------------
  "compile": "tsccss -o dist"
 ------------------------------------------------------
`);
});

program.parse(process.argv);

const { out } = program.opts();
console.log(out);

if (!out) {
  throw new Error("--out must be specified");
}
const outRoot = resolve(process.cwd(), out);

console.log(`tsccss --out ${outRoot}`);

// Read output files
const files = globbySync(`${outRoot}/**/!(*.d).{ts,tsx,js,jsx}`, {
  dot: true,
}).map((x) => resolve(x));
console.log(files);
const filesLen = files.length;
for (let i = 0; i < filesLen; i += 1) {
  const file = files[i];
  const content = readFileSync(file, "utf-8");
  const resContent = transToCSS(content);
  writeFileSync(file, resContent, "utf8");
}
function transToCSS(str) {
  const jf = jscodeshift;
  const root = jf(str);
  root.find(jf.ImportDeclaration).forEach((path) => {
    let value = "";
    if (path && path.node && path.node.source) {
      value = path.node.source.value;
    }
    const regex = /(scss|less)('|"|`)?$/i;
    if (value && regex.test(value.toString())) {
      path.node.source.value = value
        .toString()
        .replace(regex, (_res, _$1, $2) => ($2 ? `css${$2}` : "css"));
    }
  });

  return root.toSource();
}
