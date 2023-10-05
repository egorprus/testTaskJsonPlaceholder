import { DEFAULT_URL } from "../constants/constants";

export async function fetchPosts(param: string = "") {
  const url = new URL(DEFAULT_URL + param);
  const result = await fetch(url);
  if (!result.ok) {
    throw new Error("filed");
  }
  return result.json();
}
