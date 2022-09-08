import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import { Link } from "react-router-dom";
import { Badge,TextField} from "@material-ui/core";
import { ShoppingCartOutlined, SearchOutlined, Input} from "@material-ui/icons";
import { mobile } from "../../responsive";
import { GiConverseShoe } from "react-icons/gi"

const Container = styled.div`
  margin-top: 20px;
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 8%;
  background-color: white;
  ${mobile({flexwidth : "100%", height: "10%" })}
`;

/**Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성 */
const Wrapper = styled(Responsive)`
  width: 90%;
  padding: 10px 20px;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /*자식 엘리먼트 사이에 여백을 최대로 설정*/
  .logo {
    margin-right: 200px;
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 2px;
  }
  .right {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${mobile({ width : "100%", padding: "10px 0px" })}
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({ flex:3, width : "30%"})}
`;

const LinkStyle = styled(Link)`
    margin: 10px;
    color : black;
    ${mobile({ fontSize : "8px" })}
`;


const MenuItem = styled.div`
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const Header = ({ user, onLogout, onChange, query}) => {
  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <SearchOutlined style={{fontSize:"40px"}}/>
              <TextField style={{width : '250px', height:'30px'}} size="small" variant="outlined" placeholder="상품검색"
                onChange={onChange} value={query || ''}/>
          </Search>
          <LinkStyle to="/" className="logo">
            <i>SHOES SHOP</i>
          </LinkStyle>
          {user ? (
            <div className="right">
              <LinkStyle to="/products"><GiConverseShoe size="25"/></LinkStyle>
              {user._id === '630a5bfd79ccbbb4d0844649' ? <LinkStyle to="/product/register"><Input/></LinkStyle> : ''}
              {/* <LinkStyle to="/"><Person/></LinkStyle> */}
              {/* <LinkStyle to="/" onClick={onLogout}>로그아웃</LinkStyle> */}
              <MenuItem>
                <Link to="/cart">
                  <Badge overlap="rectangular" badgeContent={0} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </Link>
              </MenuItem>
            </div>
          ) : (
            <div className="right">
              <LinkStyle to="/products"><GiConverseShoe size="25"/></LinkStyle>
              <MenuItem>
                <LinkStyle onClick={() => alert("로그인 한 유저만 사용가능합니다.")} to="/login">
                  <Badge overlap="rectangular" badgeContent={0} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </LinkStyle>
              </MenuItem>
            </div>
          )}
        </Wrapper>
      </Container>
      <Spacer />
    </>
  );
};

export default Header;
