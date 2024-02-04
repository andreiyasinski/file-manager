import os from "node:os";

export const up = async (directory) => {
  if (os.homedir() === directory) {
    console.log("You can't go from the root directory");
    return directory;
  }

  try {
    return directory;
  } catch {
    console.log("Operation failed");
  }
};
