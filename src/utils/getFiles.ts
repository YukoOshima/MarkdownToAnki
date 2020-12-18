import { readdirSync } from "fs";
import path from "path";
import _ from "lodash";

export function getFiles(dirPath: string): string[] {
  const dires = readdirSync(dirPath, { withFileTypes: true });
  const files = dires.map((eachDir) => {
    const res = path.resolve(dirPath, eachDir.name);
    return eachDir.isDirectory()
      ? getFiles(res)
      : eachDir.name.includes(".md")
        ? res
        : "";
  });
  return _.flatten(files).filter((item) => !!item);
}
