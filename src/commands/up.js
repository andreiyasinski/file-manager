import os from "node:os";
import path from "node:path";

export const up = async (directory) => {
  try {
    if (os.homedir() === directory) {
      console.log("You can't go from the root directory");
      return directory;
    }

    return path.dirname(directory);
  } catch {
    console.log("Operation failed");
  }
};
