import fs from "fs";
import crypto from "crypto";

export const hash = async (args) => {
  try {
    const filePath = args?.[0];
    const stream = fs.createReadStream(filePath);
    const hash = crypto.createHash("SHA256");

    stream.pipe(hash).on("finish", () => {
      console.log(`SHA256 hash: ${hash.digest("hex")}`);
    });
  } catch {
    console.log("Operation failed");
  }
};
