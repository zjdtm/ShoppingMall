import React from "react";
import Announcement from "../components/common/Announcement";
import Footer from "../components/common/Footer";
import Style from "../components/common/Style";
import Slider from "../components/common/Slider";
import HeaderContainer from "../containers/common/HeaderContainer";
import ProductsContainer from "../containers/products/ProductsContainer";
import Categories from "./Categories";


const Home = () => {
  return (
    <div>
      <Announcement/>
      <HeaderContainer/>
      <Slider />
      <Categories />
      <ProductsContainer/>
      <Style />
      <Footer />
    </div>
  );
};

export default Home;
