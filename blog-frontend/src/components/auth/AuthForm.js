import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

/*회원가입 또는 로그인 폼을 보여 줍니다. */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;
/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const AddressSearch = styled.div`
  width: 20%;
  background-color: black;
  border-radius: 4%;
  text-align: center;
  color: white;
  margin: 10px 10px 10px 0px;
  cursor: pointer;
`;
/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;
/**에러를 보여줍니다. */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;
const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({
  type,
  form,
  onChange,
  onSubmit,
  error,
  address,
  handleClick,
}) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <>
            <StyledInput
              autoComplete="passwordConfirm"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
            <AddressSearch onClick={handleClick}>주소검색</AddressSearch>
            <StyledInput
              autoComplete="fullAddress"
              name="fullAddress"
              placeholder="기본주소"
              onChange={onChange}
              value={address}
            />
            <StyledInput
              autoComplete="extraAddress"
              name="extraAddress"
              placeholder="상세주소"
              onChange={onChange}
              value={form.extraAddress}
            />
          </>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button cyan fullWidth style={{ marginTop: "1rem" }}>
          {text}
        </Button>
      </form>
      <Footer>
        <Link to="/">홈으로</Link>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
