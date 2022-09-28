import React from "react";
import Announcement from "../components/common/Announcement";
import Footer from "../components/common/Footer";
import Style from "../components/common/Style";
import HeaderContainer from "../containers/common/HeaderContainer";
import ProductsContainer from "../containers/products/ProductsContainer";

const ProductListPage = () => {

  return (
    <>
      <Announcement/>
      <HeaderContainer/>
      <ProductsContainer/>
      <Style/>
      <Footer/>
    </>
  );
};

export default ProductListPage;
