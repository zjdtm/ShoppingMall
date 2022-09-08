import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../components/cart/Cart";
import { removeCart } from "../../lib/api/cart";
import { listCarts } from "../../modules/addCart";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { user, error, carts, loading } = useSelector(
    ({ user, cart, loading }) => ({
      user: user.user,
      error: cart.error,
      carts: cart.cart,
      loading: loading["cartList/LIST_CART"],
    })
  );

  const handleClick = async (userId, productId) => {
    try {
      console.log(userId, productId);
      await removeCart({ userId, productId });
      dispatch(listCarts(user._id));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (carts) return;
    dispatch(listCarts(user._id));
  }, [dispatch, carts, user._id]);

  return (
    <Cart
      user={user}
      loading={loading}
      carts={carts}
      error={error}
      handleClick={handleClick}
    />
  );
};

export default CartContainer;
