import { usePostsQuery } from "./hooks/usePostsQuery";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { PostPage } from "./pages/PostPage/PostPage";
import { Container, StyledApp } from "./styles/components";

function App() {
  const { isLoading } = usePostsQuery();

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <Router>
      <StyledApp>
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:postId" element={<PostPage />} />
          </Routes>
        </Container>
      </StyledApp>
    </Router>
  );
}

export default App;
