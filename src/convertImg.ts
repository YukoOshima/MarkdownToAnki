import cheerio from "cheerio";
import path from "path";
import fs from "fs";
import Jimp from "jimp";

/**
 * Converts local img urls and sources to base 64 data uri in html files
 */
export function convertImgPath(html: string) {
  let dom = cheerio.load(html);
  dom("img").each(function (idx, rawEl) {
    const el = dom(rawEl);
    let src = el.attr("src");
    if (src) {
      el.attr(
        "src",
        path.basename(src).split(".").slice(0, -1).join(".") + ".jpg"
      );
    }
  });
  return dom.html();
}

export async function generatePicUploadBody(
  directoryPath: string,
  file: string
) {
  const lerna = await Jimp.read(path.resolve(directoryPath, file));
  const data = (await lerna.quality(80).getBase64Async(Jimp.MIME_JPEG))
    .split(",")
    .slice(1)
    .join(",");
  const body = {
    action: "storeMediaFile",
    params: {
      filename: file.split(".").slice(0, -1).join(".") + ".jpg",
      data,
    },
  };
  return body;
}

export function createUploadImageBody(imgPath: string) {
  const directoryPath = path.resolve(imgPath);
  const files = fs.readdirSync(directoryPath);
  const picFiles = files.filter((file) => path.extname(file) === ".png");
  return Promise.all(
    picFiles.map((picfile) => generatePicUploadBody(directoryPath, picfile))
  );
}
