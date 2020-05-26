import axios from "axios";

export async function postAnkiConnect(actions: object[]) {
  const resp = await axios.post("http://127.0.0.1:8765", {
    action: "multi",
    params: { actions },
  });
  return resp.data;
}
