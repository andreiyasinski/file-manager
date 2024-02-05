import { stat } from "fs/promises";
import path from "path";
import os from "node:os";

export const cd = async (directory, args) => {
  try {
    const directoryName = args?.[0];
    const homeDirectory = os.homedir();

    if (directoryName === ".." && directory === homeDirectory) {
      console.log("You can't go from the root directory");
      return directory;
    }

    const itemStat = await stat(path.join(directory, directoryName));

    if (itemStat.isDirectory()) {
      return path.join(directory, directoryName);
    }

    return directory;
  } catch {
    console.log("Operation failed");
    return directory;
  }
};
