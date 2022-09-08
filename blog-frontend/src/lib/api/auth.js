import client from "./client";

//로그인
export const login = ({ username, password }) =>
  client.post("/api/auth/login", { username, password });

//회원가입
export const register = ({ username, password, fullAddress, extraAddress }) =>
  client.post("/api/auth/register", {
    username,
    password,
    fullAddress,
    extraAddress,
  });

//로그인 상태 확인
export const check = () => client.get("/api/auth/check");

//로그아웃
export const logout = () => client.post("/api/auth/logout");
