import { rename } from "fs/promises";
import path from "path";

export const rn = async (directory, args) => {
  try {
    const oldFilePath = path.join(directory, args?.[0]);
    const newFilePath = path.join(directory, args?.[1]);

    await rename(oldFilePath, newFilePath);
  } catch {
    console.log("Operation failed");
  }
};
