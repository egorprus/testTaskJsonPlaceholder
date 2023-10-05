import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { PostsList } from "../../components/Posts/PostsList";
import { RootState, useAppSelector } from "../../store/store";
import { getListRange } from "../../services";
import { IPost } from "../../models";
import { Menu } from "../../styles/components";
import { SearchInput } from "../../components/SearchField/SearchInput";

export const Main = () => {
  const { posts, currentPage, searchValue, filteredPosts } = useAppSelector(
    (state: RootState) => state.posts
  );
  const [limitPosts, setLimitPosts] = useState<Array<IPost>>([]);

  useEffect(() => {
    const currentList = searchValue ? filteredPosts : posts;
    const listRange = getListRange(currentPage, currentList);
    setLimitPosts(listRange);
  }, [currentPage, posts, searchValue, filteredPosts]);

  return (
    <>
      <Menu>
        <SearchInput />
        <Pagination />
      </Menu>
      <PostsList posts={limitPosts} />
    </>
  );
};
