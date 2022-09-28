import Announcement from "../components/common/Announcement";
import Footer from "../components/common/Footer";
import HeaderContainer from "../containers/common/HeaderContainer";
import ProductDetaileContainer from "../containers/products/ProductDetaileContainer";

const ProductDetailPage = () => {
  return (
    <>
      <Announcement/>
      <HeaderContainer/>
      <ProductDetaileContainer/>
      <Footer/>
    </>
  )
};

export default ProductDetailPage;
