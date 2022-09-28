import React from 'react'
import Footer from '../components/common/Footer'
import HeaderContainer from '../containers/common/HeaderContainer'
import MyPageContainer from '../containers/mypage/MyPageContainer'

const MyPage = () => {
  return (
    <>
        <HeaderContainer/>
        <MyPageContainer/>
        <Footer/>
    </>
  )
}

export default MyPage