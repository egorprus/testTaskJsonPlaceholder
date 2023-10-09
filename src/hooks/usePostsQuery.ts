import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/apiCall";
import { useAppDispatch } from "../store/store";
import { setCurrentPost, setPosts } from "../store/postsSlice";
/** Hook for processing a request to get all posts. */
const usePostsQuery = () => {
  const dispatch = useAppDispatch();
  return useQuery(["posts"], () => fetchPosts(), {
    onSuccess(data) {
      dispatch(setPosts(data));
    },
		retry: 1,
  });
};
/** Hook for processing a request to recicve a post by ID. */
const usePostQuery = (params: string) => {
	const dispatch = useAppDispatch();
	const queryKeys = ['posts'];
	params && queryKeys.push(params.slice(1));
  return useQuery(queryKeys, () => fetchPosts(params), {
		onSuccess(data) {
			dispatch(setCurrentPost(data));
		},
		retry: 1,
	});
};

export { usePostsQuery, usePostQuery };
