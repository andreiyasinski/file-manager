import { createInterface } from "readline/promises";
import { getName } from "./utils/getName.js";
import os from "node:os";
import { ls } from "./commands/ls.js";
import { up } from "./commands/up.js";
import { cd } from "./commands/cd.js";
import { cat } from "./commands/cat.js";
import { add } from "./commands/add.js";
import { rn } from "./commands/rn.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const currentDirectoryInfo = (currentDirectory) => {
  console.log(`You are currently in ${currentDirectory}`);
};

const fileManager = async () => {
  const userName = getName();
  let currentDirectory = os.homedir();

  console.log(`Welcome to the File Manager, ${userName}!`);
  currentDirectoryInfo(currentDirectory);

  const exit = () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    rl.close();
  };

  console.log("Enter the command");

  rl.on("line", async (input) => {
    const [command, ...argsArr] = input.split(" ");

    switch (command) {
      case ".exit":
        exit();
        break;
      case "ls":
        ls(currentDirectory);
        break;
      case "up":
        currentDirectory = await up(currentDirectory);
        currentDirectoryInfo(currentDirectory);
        break;
      case "cd":
        currentDirectory = await cd(currentDirectory, argsArr);
        currentDirectoryInfo(currentDirectory);
        break;
      case "cat":
        await cat(currentDirectory, argsArr);
        currentDirectoryInfo(currentDirectory);
        break;
      case "add":
        await add(currentDirectory, argsArr);
        currentDirectoryInfo(currentDirectory);
        break;
      case "rn":
        await rn(currentDirectory, argsArr);
        currentDirectoryInfo(currentDirectory);
        break;
      default:
        console.log("Invalid input");
        break;
    }
  });

  rl.on("SIGINT", () => {
    exit();
  });
};

fileManager();
