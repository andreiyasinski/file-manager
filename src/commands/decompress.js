import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream";
import { createBrotliDecompress } from "zlib";

export const decompress = async (args) => {
  try {
    const pathToFile = args?.[0];
    const pathToDestination = args?.[1];

    const fileNameWithoutExtension = path.basename(
      pathToFile,
      path.extname(pathToFile)
    );

    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(
      path.join(pathToDestination, fileNameWithoutExtension)
    );

    const brotli = createBrotliDecompress();

    pipeline(readStream, brotli, writeStream, (err) => {
      if (err) {
        throw new Error();
      }
    });
  } catch {
    console.log("Operation failed");
  }
};
