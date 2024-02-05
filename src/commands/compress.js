import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream";
import { createBrotliCompress } from "zlib";

export const compress = async (args) => {
  try {
    const pathToFile = args?.[0];
    const pathToDestination = args?.[1];
    const fileName = path.basename(pathToFile);
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(
      path.join(pathToDestination, `${fileName}.br`)
    );

    const brotli = createBrotliCompress();

    pipeline(readStream, brotli, writeStream, (err) => {
      if (err) {
        throw new Error();
      }
    });
  } catch {
    console.log("Operation failed");
  }
};
