const jf = require("jscodeshift");

const value = `
import React from 'react';
import { Button, Input } from 'antd';
`;

const root = jf(value);
root
  .find(jf.ImportDeclaration, { source: { value: "antd" } })
  .forEach((path) => {
    jf(path).replaceWith("");
  });

console.log(root.toSource());