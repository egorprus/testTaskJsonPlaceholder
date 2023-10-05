import { StyledButton } from "../../styles/components";
import { PaginationButtonProp } from "../../models";

export const PaginationButton = ({
  text,
  handleClick,
  isDisabled,
}: PaginationButtonProp) => {
  return (
    <StyledButton type="button" onClick={handleClick} disabled={isDisabled}>
      {text}
    </StyledButton>
  );
};
