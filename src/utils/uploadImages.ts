import { postToAnki } from "./util";
import { createUploadImageBody } from "../convertImg";

export async function uploadImages(img: string) {
  const uploadImgBody = await createUploadImageBody(img);
  const uploadResp = await postToAnki(uploadImgBody);
  return uploadResp;
}
