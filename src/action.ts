import { ankiAction } from "./addAnki";
const fs = require("fs");

// function to encode file data to base64 encoded string
function base64_encode(file: string) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString("base64");
}

async function doAction() {
  try {
    const data = base64_encode("../Anki/2020-05-26-15-30-49.png");
    console.log(data);
    const resp = await ankiAction({
      action: "storeMediaFile",
      params: {
        filename: "2020-05-26-15-30-49.png",
        data,
      },
    });
    console.log(resp);
  } catch (error) {
    console.log(error.message);
  }
}

doAction();
