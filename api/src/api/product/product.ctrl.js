import mongoose from 'mongoose';
import Product from '../../models/product';

/*
  POST /api/product/register
  {
    name: 상품이름,
    manufacturer: 제조사,
    product_image: 상품이미지,
    product_info: 상품정보 이미지 형태로,
    price: 가격,
  }
*/

export const createProduct = async (ctx) => {
  const newProduct = new Product(ctx.request.body);
  try {
    await newProduct.save();
    ctx.body = newProduct;

    ctx.status = 201;
  } catch (error) {
    console.log(error);
    ctx.body = error;
  }
};

export const getProducts = async (ctx) => {
  try {
    const findproduct = await Product.find();
    ctx.body = findproduct;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 404;
  }
};

export const getProduct = async (ctx) => {
  const { id } = ctx.params;

  try {
    const product = await Product.findById(id);
    ctx.body = product;

    ctx.status = 200;
  } catch (error) {
    ctx.status = 404;
  }
};

export const updateProduct = async (ctx) => {
  const { id } = ctx.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return (ctx.status = 404);
  const updatedProduct = ctx.request.body;

  const update = await Product.findByIdAndUpdate(id, updatedProduct, {
    new: true,
  });

  ctx.body = update;
};

export const deleteProduct = async (ctx) => {
  const { id } = ctx.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return (ctx.status = 404);
  await Product.findByIdAndRemove(id);
};

export const likeProduct = async (ctx) => {
  const { id } = ctx.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return (ctx.status = 404);

  const product = await Product.findById(id);

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { likeCount: product.likeCount + 1 },
    { new: true },
  );
  ctx.body = updatedProduct;
};
