import { IPost } from "../models";

/** Get part of the list for a current page. */
export function getListRange(currentPage: number, posts: IPost[]): IPost[] {
  let range = posts.slice(0, 10);
  if (currentPage > 1) {
    range = posts.slice((currentPage - 1) * 10, currentPage * 10);
  }
  return range;
}
