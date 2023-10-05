import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/apiCall";
import { useAppDispatch } from "../store/store";
import { setCurrentPost, setPosts } from "../store/postsSlice";
/** Хук обработки запроса получения всех постов. */
const usePostsQuery = () => {
  const dispatch = useAppDispatch();
  return useQuery(["posts"], () => fetchPosts(), {
    onSuccess(data) {
      dispatch(setPosts(data));
    },
		retry: 1,
  });
};
/** Хук обработки запроса получения запроса по ID. */
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
