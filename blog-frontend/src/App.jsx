import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const PostListPage = lazy(() => import("./pages/PostListPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const PostPage = lazy(() => import("./pages/PostPage"));
const Home = lazy(() => import("./pages/Home"));
const PostWrite = lazy(() => import("./pages/PostWrite"));
const ProductListPage = lazy(() => import("./pages/ProductListPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const Payment = lazy(() => import("./payment/Payment"));
const ProductRegisterPage = lazy(() => import("./pages/ProductRegisterPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<React.Suspense fallback={<>loading...</>}><Home /></React.Suspense>} />
        <Route path="/login" element={<React.Suspense fallback={<>loading...</>}><LoginPage /></React.Suspense>} />
        <Route path="/register" element={<React.Suspense fallback={<>loading...</>}><RegisterPage /></React.Suspense>} />
        <Route path="/posts" element={<React.Suspense fallback={<>loading...</>}><PostListPage /></React.Suspense>} />
        <Route path="/posts/@:username/:postId" element={<React.Suspense fallback={<>loading...</>}><PostPage /></React.Suspense>} />
        <Route path="/posts/write" element={<React.Suspense fallback={<>loading...</>}><PostWrite /></React.Suspense>} />
        <Route path="/products" element={<React.Suspense fallback={<>loading...</>}><ProductListPage /></React.Suspense>} />
        <Route path="/products/:productId" element={<React.Suspense fallback={<>loading...</>}><ProductDetailPage /></React.Suspense>} />
        <Route path="/product/register" element={<React.Suspense fallback={<>loading...</>}><ProductRegisterPage /></React.Suspense>} />
        <Route path="/cart" element={<React.Suspense fallback={<>loading...</>}><CartPage /></React.Suspense>} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
