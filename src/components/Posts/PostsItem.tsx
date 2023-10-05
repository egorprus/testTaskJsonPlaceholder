import { IPostItemProp } from "../../models";
import {
  FlexColumn,
  StyledLink,
  StyledListItem,
  StyledMainTitle,
  StyledParagraph,
  StyledPostTitle,
} from "../../styles/components";

export const PostItem = ({ post }: IPostItemProp) => {

  return (
    <StyledListItem key={post.id}>
      <StyledLink to={`/${post.id}`}>
        <StyledMainTitle>{post.id}</StyledMainTitle>
        <FlexColumn>
          <StyledPostTitle>{post.title}</StyledPostTitle>
          <StyledParagraph>{post.body}</StyledParagraph>
        </FlexColumn>
      </StyledLink>
    </StyledListItem>
  );
};
