import fs from "fs";
import path from "path";
import { promisify } from "util";
import Jimp from "jimp";

const pReadDir = promisify(fs.readdir);
const pReadFile = promisify(fs.readFile);

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
  const lerna = await Jimp.read(file);
  const data = await lerna
    .quality(80)
    .greyscale()
    .getBase64Async(Jimp.MIME_JPEG);
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
