export const getName = () => {
  const name = process.argv
    .find((item) => item.startsWith("--username="))
    .split("=")?.[1];

  return name || "unknown";
};
