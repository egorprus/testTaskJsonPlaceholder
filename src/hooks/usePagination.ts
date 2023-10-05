import { OperationType } from "../enums";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { setCurrentPage } from "../store/postsSlice";

/** Хук пагинации. */
export const usePaginations = () => {
  const dispatch = useAppDispatch();
  const { currentPage, posts, searchValue, filteredPosts } = useAppSelector(
    (state: RootState) => state.posts
  );

	/** Флаг положительного числа. */
  const isPositive = currentPage - 1 > 0;

	/** Флаг что число меньше максимального значения. */
  const isLessThanLimit = searchValue
    ? (currentPage + 1) * 10 <= filteredPosts.length
    : (currentPage + 1) * 10 <= posts.length;
	
	/**  Обработчик  перехода по страницам. */
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
