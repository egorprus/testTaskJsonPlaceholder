import { ChangeEvent, useCallback } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { setCurrentPage, setSearchValue } from "../../store/postsSlice";
import { StyledInput } from "../../styles/components";

export const SearchInput = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state: RootState) => state.posts);

  /** Filter field value change handler. */
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchValue(e.target.value));
      if (e.target.value) {
        dispatch(setCurrentPage(1));
      }
    },
    [dispatch]
  );

  return (
    <StyledInput value={searchValue} type="text" onChange={handleChange} />
  );
};
