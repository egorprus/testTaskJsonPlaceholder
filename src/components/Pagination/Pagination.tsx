import { OperationType } from "../../enums";
import { usePaginations } from "../../hooks/usePagination";
import { RootState, useAppSelector } from "../../store/store";
import {
  StyledPagination,
  StyledPaginationText,
} from "../../styles/components";
import { PaginationButton } from "./PaginationButton";

export const Pagination = () => {
  const { currentPage } = useAppSelector((state: RootState) => state.posts);
  const { handleClick, isPositive, isLessThanLimit } = usePaginations();

  return (
    <StyledPagination>
      <PaginationButton
        text="prev"
        handleClick={() => handleClick(OperationType.decrement)}
        isDisabled={!isPositive}
      />
      <StyledPaginationText>{currentPage}</StyledPaginationText>
      <PaginationButton
        text="next"
        handleClick={() => handleClick(OperationType.increment)}
        isDisabled={!isLessThanLimit}
      />
    </StyledPagination>
  );
};
