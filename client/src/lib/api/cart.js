import client from "./client";

export const createCart = ({
  userId,
  productId,
  productName,
  product_image,
  product_info,
  price,
  quantity,
  size,
}) =>
  client.patch(`/api/cart/${userId}`, {
    productId,
    productName,
    product_image,
    product_info,
    price,
    quantity,
    size,
  });

export const readCart = (id) => client.get(`/api/cart/${id}`);

export const checkCart = ({ userId, productId }) =>
  client.post(`/api/cart/check/${userId}`, {
    productId,
  });

export const updateCart = ({
  userId,
  productId,
  productName,
  product_image,
  product_info,
  price,
  quantity,
  size,
}) =>
  client.put(`/api/cart/${userId}`, {
    productId,
    productName,
    product_image,
    product_info,
    price,
    quantity,
    size,
  });

export const removeCart = ({ userId, productId }) =>
  client.post(`/api/cart/${userId}`, {
    productId,
  });
