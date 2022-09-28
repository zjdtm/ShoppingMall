import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import { check } from "../../modules/user";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import useDaumPostcodePopup from "../../../node_modules/react-daum-postcode/lib/useDaumPostcodePopup";

const RegisterForm = () => {
  const [address, setaddress] = useState("");
  const [error, setError] = useState(null);
  const open = useDaumPostcodePopup();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  //인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;

    if (address !== "") {
      dispatch(
        changeField({
          form: "register",
          key: "fullAddress",
          value: address,
        })
      );
    }
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  //폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm, fullAddress, extraAddress } =
      form;
    //하나라도 비어 있다면
    if (
      [username, password, passwordConfirm, fullAddress, extraAddress].includes(
        ""
      )
    ) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }

    // const reg =
    //   /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-zd@$!%*?&].{8,20}$/;
    // if (!reg.test(password)) {
    //   console.log(password);
    //   console.log(reg.test(password));
    //   setError(
    //     "최소 8문자 최대10문자, 하나 이상의 대문자, 하나 이상의 소문자, 하나의 숫자 및 하나의 특수문자를 넣어주세요."
    //   );
    //   return;
    // }

    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      changeField({ form: "register", key: "password", value: "" });
      changeField({ form: "register", key: "passwordConfirm", value: "" });
      return;
    }
    dispatch(register({ username, password, fullAddress, extraAddress }));
  };

  //컴포넌트가 처음 렌더링 될 때 form을 초기화함
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  //회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      // 계정명이 이미 존재할 때
      if (authError.response.status === 409) {
        setError("이미 존재하는 계정명입니다.");
        return;
      }
      // 기타 이유
      setError("회원가입 실패");
      return;
    }

    if (auth) {
      console.log("회원가입 성공");
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  //user값이 잘 설정되어있는지 확인
  useEffect(() => {
    if (user) {
      navigate("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [user, navigate]);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? `,(${extraAddress})` : "";
    }
    setaddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      handleClick={handleClick}
      address={address}
      error={error}
    />
  );
};
export default RegisterForm;
