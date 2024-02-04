import * as readline from "node:readline/promises";

import { getName } from "./cli/getName.js";

const fileManager = () => {
  const userName = getName();
  console.log(`Welcome to the File Manager, ${userName}!`);
};

fileManager();
