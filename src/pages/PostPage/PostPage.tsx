import { Navigate, useLocation } from "react-router-dom";
import { RootState, useAppSelector } from "../../store/store";
import { StyledLink, StyledSection } from "../../styles/components";
import { usePostQuery } from "../../hooks/usePostsQuery";

export const PostPage = () => {
  const { currentPost } = useAppSelector((state: RootState) => state.posts);
  const location = useLocation();
  const { isLoading } = usePostQuery(location.pathname);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!currentPost) {
    return <Navigate to="/" />;
  }

  return (
    <StyledSection>
      <StyledLink to="/">back</StyledLink>
      <h1>{currentPost.title}</h1>
      <p>{currentPost.body}</p>
    </StyledSection>
  );
};
