import React from "react";
import PostListContainer from "../containers/posts/PostListContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";
import HeaderContainer from "../containers/common/HeaderContainer";
import Announcement from "../components/common/Announcement";
import Footer from "../components/common/Footer";

const PostListPage = () => {
  return (
    <>
      <Announcement/>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
      <Footer/>
    </>
  );
};

export default PostListPage;
