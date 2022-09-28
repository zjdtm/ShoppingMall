import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import Announcement from "../components/common/Announcement";
import RegisterForm from "../containers/auth/RegisterForm";
import HeaderContainer from "../containers/common/HeaderContainer";

const RegisterPage = () => {
    return (
        <>
            <Announcement/>
            <HeaderContainer/>
            <AuthTemplate>
                <RegisterForm />
            </AuthTemplate>
        </>
    )
}

export default RegisterPage;