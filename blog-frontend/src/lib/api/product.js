import client from "./client";

export const createProduct = ({
  name,
  manufacturer,
  product_image,
  product_info,
  price,
  size,
}) =>
  client.post("/api/product/register", {
    name,
    manufacturer,
    product_image,
    product_info,
    price,
    size,
  });

export const readProduct = (id) => client.get(`/api/product/${id}`);

export const fetchProduct = () => client.get("/api/product");

export const updateProduct = ({
  id,
  name,
  manufacturer,
  product_image,
  product_info,
  price,
  size,
}) =>
  client.patch(`/api/product/${id}`, {
    name,
    manufacturer,
    product_image,
    product_info,
    price,
    size,
  });

export const deletePost = (id) => client.delete(`/api/product/${id}`);

export const likePost = (id) => client.patch(`/api/product/like/${id}`);
