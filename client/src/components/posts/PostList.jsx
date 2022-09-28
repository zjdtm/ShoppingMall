import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "../../../node_modules/@material-ui/core/index";

const PostListBlock = styled(Responsive)`
  margin-top: 6rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5rem;
  
`;

const PostItem = ({ post }) => {
  const { no, publishedDate, user, title, _id } = post;
  return (
    <TableRow>
        <TableCell>
          <Link to={`/posts/@${user.username}/${_id}`}>{no}</Link>
        </TableCell>
        <TableCell align="center">
        <Link to={`/posts/@${user.username}/${_id}`}>{title}</Link>      
        </TableCell>
        <TableCell align="center">
          {publishedDate.substr(0, 10)}          
        </TableCell>
    </TableRow>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  //에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/posts/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>

      {/* 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
      {!loading && posts && (
          <TableContainer component={Paper}>
            <Table sx={{ minwidth : 850}} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell>No.</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {posts.map((post) => (
                <PostItem post={post} key={post._id} />
              ))}
              </TableBody>
            </Table>
          </TableContainer>
      )}
    </PostListBlock>
  );
};

export default PostList;
