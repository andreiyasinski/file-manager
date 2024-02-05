import { writeFile } from "fs/promises";
import path from "path";

export const add = async (directory, args) => {
  try {
    const fileName = args?.[0];
    const filePath = path.join(directory, fileName);
    await writeFile(filePath, "");
  } catch {
    console.log("Operation failed");
  }
};
