import { createWriteStream, createReadStream } from "fs";
import { rm, unlink } from "fs/promises";
import path from "path";
import { pipeline } from "stream";

export const mv = async (args) => {
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

        await unlink(pathToFile);
      });
      response();
    });
  } catch {
    console.log("Operation failed");
  }
};
