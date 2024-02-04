import { createReadStream } from "fs";
import path from "path";
import { stdout } from "process";

export const cat = async (directory, command) => {
  try {
    const fileName = command.split(" ")?.[1];
    const pathName = path.join(directory, fileName);

    const stream = createReadStream(pathName, "utf-8");
    stream.pipe(stdout);
  } catch {
    console.log("Operation failed");
  }
};
