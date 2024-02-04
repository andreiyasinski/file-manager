import { readdir, stat } from "fs/promises";
import path from "path";

export const ls = async (directory) => {
  try {
    const files = await readdir(directory);

    const tableData = [];

    for (let item of files) {
      const itemStat = await stat(path.join(directory, item));

      tableData.push({
        name: item,
        type: itemStat.isDirectory() ? "directory" : "file",
      });
    }

    console.table(tableData);
  } catch {
    console.log("Operation failed");
  }
};
