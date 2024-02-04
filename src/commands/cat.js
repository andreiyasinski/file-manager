import { createReadStream } from "fs";
import { readdir, stat } from "fs/promises";
import path from "path";
import { stdout } from "process";

export const cat = async (directory, args) => {
  try {
    const fileName = args?.[0];
    const pathName = path.join(directory, fileName);

    const itemStat = await stat(path.join(directory, fileName));

    if (!itemStat.isDirectory()) {
      const stream = createReadStream(pathName, "utf-8");
      stream.pipe(stdout);
    }
  } catch {
    console.log("Operation failed");
  }
};
