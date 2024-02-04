import { createWriteStream, createReadStream } from "fs";
import path from "path";

export const cp = async (args) => {
  try {
    const pathToFile = args?.[0];
    const pathToCopyDirectory = args?.[1];

    const fileName = path.basename(pathToFile);
    const pathToFileCopy = path.join(pathToCopyDirectory, fileName);

    const readStream = createReadStream(pathToFile, "utf-8");
    const writeStream = createWriteStream(pathToFileCopy);

    readStream.pipe(writeStream);
  } catch {
    console.log("Operation failed");
  }
};
