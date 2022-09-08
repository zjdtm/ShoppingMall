import React from 'react'
import Announcement from '../components/common/Announcement'
import Footer from '../components/common/Footer'
import Style from '../components/common/Style'
import CartContainer from '../containers/cart/CartContainer'
import HeaderContainer from '../containers/common/HeaderContainer'

const CartPage = () => {
  return (
    <>
      <Announcement/>
      <HeaderContainer/>
      <CartContainer/>
      <Style/>
      <Footer/>
    </>
  )
}

export default CartPage;