import { createWriteStream, createReadStream } from "fs";
import path from "path";
import { pipeline } from "stream";

export const cp = async (args) => {
  try {
    const pathToFile = args?.[0];
    const pathToCopyDirectory = args?.[1];

    const fileName = path.basename(pathToFile);
    const pathToFileCopy = path.join(pathToCopyDirectory, fileName);

    const readStream = createReadStream(pathToFile, "utf-8");
    const writeStream = createWriteStream(pathToFileCopy);

    await new Promise((response, reject) => {
      pipeline(readStream, writeStream, async (error) => {
        if (error) {
          reject(new Error());
        }
      });
      response();
    });
  } catch {
    console.log("Operation failed");
  }
};
