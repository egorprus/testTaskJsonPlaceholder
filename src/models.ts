export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: IPost[];
  filteredPosts: IPost[];
  currentPost: IPost | null;
  currentPage: number;
  searchValue: string;
}

export interface PostsListProp {
  posts: IPost[];
}

export interface IPostItemProp {
  post: IPost;
}

export interface PaginationButtonProp {
  text: string;
  handleClick: () => void;
  isDisabled?: boolean;
}

export interface FetchPostProp {
	[key: string]: string;
}