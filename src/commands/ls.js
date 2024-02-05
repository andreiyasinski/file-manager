import { readdir, stat } from "fs/promises";
import path from "path";

export const ls = async (directory) => {
  try {
    const files = await readdir(directory);

    const tableFilesData = [];
    const tableDirectoriesData = [];

    for (let item of files) {
      const itemStat = await stat(path.join(directory, item));

      if (itemStat.isDirectory()) {
        tableDirectoriesData.push({
          name: item,
          type: "directory",
        });
      } else {
        tableFilesData.push({
          name: item,
          type: "file",
        });
      }
    }

    const tableData = [
      ...tableDirectoriesData.sort((a, b) => a.name.localeCompare(b.name)),
      ...tableFilesData.sort((a, b) => a.name.localeCompare(b.name)),
    ];

    console.table(tableData);
  } catch {
    console.log("Operation failed");
  }
};
