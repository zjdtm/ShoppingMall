import React from "react";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostPage from "./pages/PostPage";
import Home from "./pages/Home";
import PostWrite from "./pages/PostWrite";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import Payment from "./payment/Payment";
import ProductRegisterPage from "./pages/ProductRegisterPage";
import ProductDetailPage from "./pages/ProductDetailPage";
// import MyPage from "./pages/MyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/@:username/:postId" element={<PostPage />} />
        <Route path="/posts/write" element={<PostWrite />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/product/register" element={<ProductRegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/myPage" element={<MyPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
