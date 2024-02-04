import { stat } from "fs/promises";
import path from "path";

export const cd = async (directory, args) => {
  try {
    const directoryName = args?.[0];

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
