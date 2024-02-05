import fs from "fs/promises";

export const rm = async (args) => {
  try {
    const filePath = args?.[0];
    await fs.rm(filePath);
  } catch {
    console.log("Operation failed");
  }
};
