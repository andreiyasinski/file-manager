import { getName } from "./utils/getName.js";
import { stdin, stdout, exit } from "process";

const fileManager = async () => {
  const userName = getName();
  console.log(`Welcome to the File Manager, ${userName}!`);

  process.stdin.on("data", (chunk) => {
    const command = chunk.toString();

    if (command.includes(".exit")) {
      console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
      exit();
    }
  });
};

fileManager();
