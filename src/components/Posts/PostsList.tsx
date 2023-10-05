import { StyledList } from "../../styles/components";
import { PostsListProp } from "../../models";
import { PostItem } from "./PostsItem";

export const PostsList = ({ posts }: PostsListProp) => {
  return (
    <StyledList>
      {posts.length
        ? posts.map((post) => <PostItem post={post} key={post.id} />)
        : null}
    </StyledList>
  );
};
