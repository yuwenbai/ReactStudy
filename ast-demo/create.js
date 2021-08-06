const jf = require("jscodeshift");

const value = `
import React from 'react';
import { Button, Input } from 'antd';
`;

const root = jf(value);
root
  .find(jf.ImportDeclaration, { source: { value: "antd" } })
  .forEach((path) => {
    const { specifiers } = path.node;
    specifiers.push(jf.importSpecifier(jf.identifier("Select")));
  });

console.log(root.toSource());