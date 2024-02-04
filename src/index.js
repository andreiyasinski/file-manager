import { createInterface } from "readline/promises";
import { getName } from "./utils/getName.js";
import os from "node:os";
import { ls } from "./commands/ls.js";
import { up } from "./commands/up.js";
import { cd } from "./commands/cd.js";
import { cat } from "./commands/cat.js";

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
    const command = input;

    if (command === ".exit") {
      exit();
      return;
    }

    if (command === "ls") {
      ls(currentDirectory);
      return;
    }

    if (command === "up") {
      up(currentDirectory);
      return;
    }

    if (command.startsWith("cd ")) {
      currentDirectory = await cd(currentDirectory, command);
      currentDirectoryInfo(currentDirectory);
      return;
    }

    if (command.startsWith("cat ")) {
      await cat(currentDirectory, command);
      return;
    }

    console.log("Invalid input");
  });

  rl.on("SIGINT", () => {
    exit();
  });
};

fileManager();
