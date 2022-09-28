import React, { useCallback, useEffect } from "react";
import PrdocutRegister from "../../components/products/PrdocutRegister";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "../../modules/product_register";

const ProductRegisterContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return <PrdocutRegister onChangeField={onChangeField} user={user} />;
};

export default ProductRegisterContainer;
