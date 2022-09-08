import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import Header from "../../components/common/Header";
import { FilterlistProducts } from "../../modules/products";
import { logout } from "../../modules/user";

const HeaderContainer = () => {
  const navigate = useNavigate();
  const { user, cart, query } = useSelector(({ user, cart, products }) => ({
    user: user.user,
    cart: cart.cart,
    query: products.query,
  }));

  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    navigate("/");
  };

  const onChange = (e) => {
    dispatch(FilterlistProducts(e.target.value));
  };

  return (
    <Header
      user={user}
      cart={cart}
      onLogout={onLogout}
      onChange={onChange}
      query={query}
    />
  );
};

export default HeaderContainer;
