import fs from "fs";
import path from "path";
import { promisify } from "util";

const pReadDir = promisify(fs.readdir);
const pReadFile = promisify(fs.readFile);

const directoryPath = path.join(__dirname);

async function base64_encode(file: string) {
  const bitmap = await pReadFile(file);
  return Buffer.from(bitmap).toString("base64");
}

export async function scanImgs(directoryPath: string) {
  const files = await pReadDir(directoryPath);
  const picFiles = files.filter((file) => path.extname(file) === ".png");
  return Promise.all(picFiles.map((picfile) => generatePicUploadBody(picfile)));
}

export async function generatePicUploadBody(file: string) {
  const data = await base64_encode(file);
  const body = {
    action: "storeMediaFile",
    params: {
      filename: file,
      data,
    },
  };
  return body;
}

// scanPicName(directoryPath);

// generatePicUploadBody("addAnki.ts");
