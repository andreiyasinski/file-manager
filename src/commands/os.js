import { EOL, cpus, homedir, userInfo, arch } from "os";

export const operatingSystem = async (args) => {
  try {
    switch (args?.[0]) {
      case "--EOL":
        console.log(EOL);
        break;
      case "--cpus":
        console.log(
          cpus().map((item) => ({ model: item.model, speed: item.speed }))
        );
        break;
      case "--homedir":
        console.log(homedir());
        break;
      case "--username":
        console.log(userInfo().username);
        break;
      case "--architecture":
        console.log(arch());
        break;
      default:
        throw new Error();
    }
  } catch {
    console.log("Operation failed");
  }
};
