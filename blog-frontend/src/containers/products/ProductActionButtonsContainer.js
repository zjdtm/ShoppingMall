import React, { useEffect } from "react";
import ProductRegisterActionButtons from "../../components/products/ProductRegisterActionButtons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  product_registerPost,
  product_updatePost,
} from "../../modules/product_register";

const ProductActionButtonsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    name,
    manufacturer,
    product,
    product_image,
    product_info,
    price,
    productError,
    originalProductId,
  } = useSelector(({ product_register }) => ({
    id: product_register._id,
    name: product_register.name,
    manufacturer: product_register.manufacturer,
    product_image: product_register.product_image,
    product_info: product_register.product_info,
    price: product_register.price,
    size: product_register.size,
    color: product_register.color,
    product: product_register.product,
    productError: product_register.productError,
    originalProductId: product_register.originalProductId,
  }));

  const onPublish = () => {
    if (originalProductId) {
      dispatch(
        product_updatePost({
          name,
          manufacturer,
          product_image,
          product_info,
          price,
          id: originalProductId,
        })
      );
      return;
    }
    dispatch(
      product_registerPost({
        name,
        manufacturer,
        product_image,
        product_info,
        price,
      })
    );
  };

  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (product) {
      navigate(`/products`);
    }
    if (productError) {
      console.log(productError);
    }
  }, [navigate, product, productError]);

  return (
    <ProductRegisterActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEit={!originalProductId}
    />
  );
};

export default ProductActionButtonsContainer;
