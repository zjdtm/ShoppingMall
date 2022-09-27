import User from '../../models/user';

export const createCart = async (ctx) => {
  const { id } = ctx.params;

  try {
    const cart = await User.findOneAndUpdate(
      { _id: id },
      { $push: { cart: ctx.request.body } },
      { new: true },
    );
    ctx.body = cart;
  } catch (e) {
    ctx.body = e;
  }
};

export const userAllCart = async (ctx) => {
  const { id } = ctx.params;
  try {
    const findCart = await User.findById(id);
    ctx.body = findCart.cart;
  } catch (e) {
    ctx.body = e;
  }
};

export const checkCart = async (ctx) => {
  const { id } = ctx.params;
  const { productId } = ctx.request.body;
  try {
    const user = await User.findById(id);
    ctx.body = user.cart.findIndex((item) => item.productId === productId);
    console.log(ctx.body);
  } catch (e) {
    ctx.body = e;
  }
};

export const updateCart = async (ctx) => {
  const { id } = ctx.params;

  try {
    const updateCart = await User.findOneAndUpdate(
      { _id: id },
      { $set: { cart: ctx.request.body } },
    );
    ctx.body = updateCart;
  } catch (e) {
    ctx.body = e;
  }
};

export const deleteCart = async (ctx) => {
  const { id } = ctx.params;
  const { productId } = ctx.request.body;

  try {
    await User.findOneAndUpdate(
      { _id: id },
      { $pull: { cart: { productId: productId } } },
      { new: true },
    );
    ctx.status = 200;
  } catch (e) {
    ctx.body = e;
  }
};
