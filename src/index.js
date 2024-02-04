import { createInterface } from "readline/promises";
import { getName } from "./utils/getName.js";
import os from "node:os";
import { ls } from "./commands/ls.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileManager = async () => {
  const userName = getName();
  let currentDirectory = os.homedir();

  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${currentDirectory}`);

  const exit = () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    rl.close();
  };

  console.log("Enter the command");

  rl.on("line", async (input) => {
    const command = input;

    switch (command) {
      case ".exit":
        exit();
        break;
      case "ls":
        ls(currentDirectory);
        break;
      default:
        console.log("Invalid input");
    }
  });

  rl.on("SIGINT", () => {
    exit();
  });
};

fileManager();
