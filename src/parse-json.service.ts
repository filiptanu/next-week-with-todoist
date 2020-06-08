import fs from "fs";
import { Task } from "./task";

export class ParseJsonService {
  parseJsonFromFile(path: string): Promise<Task[]> {
    return fs.promises.readFile(path).then((buffer) => {
      return JSON.parse(buffer.toString());
    });
  }

  //   parseJsonFromUrl(url: string): Promise<Task[]> {}
}
