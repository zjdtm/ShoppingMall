import React from "react";
import ProductRegisterContainer from "../containers/products/ProductRegisterContainer";
import ProductActionButtonsContainer from "../containers/products/ProductActionButtonsContainer";
import HeaderContainer from "../containers/common/HeaderContainer";
import Announcement from "../components/common/Announcement";

const ProductRegisterPage = () => {
  return (
    <>
      <Announcement/>
      <HeaderContainer/>
      <ProductRegisterContainer />
      <ProductActionButtonsContainer />
    </>
  );
};

export default ProductRegisterPage;
