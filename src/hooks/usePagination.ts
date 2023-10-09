import { OperationType } from "../enums";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { setCurrentPage } from "../store/postsSlice";

/** Hook paggination. */
export const usePaginations = () => {
  const dispatch = useAppDispatch();
  const { currentPage, posts, searchValue, filteredPosts } = useAppSelector(
    (state: RootState) => state.posts
  );

	/** Positive number flag. */
  const isPositive = currentPage - 1 > 0;

	/** Flag that the number is less than the max value. */
  const isLessThanLimit = searchValue
    ? (currentPage + 1) * 10 <= filteredPosts.length
    : (currentPage + 1) * 10 <= posts.length;
	
	/**  Page jump handler. */
  const handleClick = (operation: OperationType) => {
    switch (operation) {
      case OperationType.decrement:
        if (isPositive) {
          dispatch(setCurrentPage(currentPage - 1));
        }
        break;
      case OperationType.increment:
        if (isLessThanLimit) {
          dispatch(setCurrentPage(currentPage + 1));
        }
    }
  };
  return { handleClick, isPositive, isLessThanLimit };
};
