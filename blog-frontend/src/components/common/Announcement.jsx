import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "../../../node_modules/react-redux/es/exports";
import { logout } from "../../modules/user";

const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: whitesmoke;
  text-decoration: black;
  color: white;
  display: flex;
  float: left;
  position: fixed;
  z-index: 11;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const LinkStyle = styled(Link)`
    margin: 10px;
    color : black;
`;

const Announcement = () => {
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    alert("로그아웃 되었습니다.");
    window.location.reload();
    window.location.href("/");
  };


  return (
    <Container>
        {localStorage.getItem("user") ? (
          <>
            <LinkStyle to="/" onClick={onLogout}>로그아웃</LinkStyle>
            <LinkStyle to="/posts">게시판</LinkStyle>
          </>
        ) : (
          <>
            <LinkStyle to="/login">로그인</LinkStyle>
            <LinkStyle to="/register">회원가입</LinkStyle>
            <LinkStyle to="/posts">게시판</LinkStyle>
          </> 
        )
      }
          
          
    </Container>
  );
};

export default Announcement;