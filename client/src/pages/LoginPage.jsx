import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import Announcement from "../components/common/Announcement";
import Footer from "../components/common/Footer";
// import AuthForm from "../components/auth/AuthForm";
import LoginForm from "../containers/auth/LoginForm";
import HeaderContainer from "../containers/common/HeaderContainer";

const LoginPage = () => {
    return (
        <>
            <Announcement/>
            <HeaderContainer/>
            <AuthTemplate>
                <LoginForm/>
            </AuthTemplate>
            <Footer/>
        </>
    )
};

export default LoginPage;