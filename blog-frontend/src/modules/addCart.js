import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as cartAPI from "../lib/api/cart";
import { takeLatest } from "redux-saga/effects";

const [ADD_CART, ADD_CART_SUCCESS, ADD_CART_FAILURE] =
  createRequestActionTypes("addCart/ADD_CART"); //카트 추가
const [UPDATE_CART, UPDATE_CART_SUCCESS, UPDATE_CART_FAILURE] =
  createRequestActionTypes("addCart/UPDATE_CART"); //카트 수정
const [LIST_CART, LIST_CART_SUCCESS, LIST_CART_FALURE] =
  createRequestActionTypes("cartList/LIST_CART"); // 카트 리스트
const [CHECK_CART, CHECK_CART_SUCCESS, CHECK_CART_FAILURE] =
  createRequestActionTypes("addCart/CHECK_CART");
const UNLOAD_CART = "addCart/UNLOAD_CART"; // 제품 페이지에서 벗어날 때 데이터 비우기

export const AddCart = createAction(
  ADD_CART,
  ({ user, product, quantity, size }) => ({
    userId: user._id,
    productId: product._id,
    productName: product.name,
    product_image: product.product_image,
    product_info: product.product_info,
    price: product.price,
    quantity,
    size,
  })
);

export const updateCart = createAction(
  UPDATE_CART,
  ({ user, product, quantity }) => ({
    userId: user._id,
    productId: product._id,
    productName: product.name,
    product_image: product.product_image,
    product_info: product.product_info,
    price: product.price,
    quantity,
  })
);

export const CheckCart = createAction(CHECK_CART, ({ user, product }) => ({
  userId: user._id,
  productId: product._id,
}));

export const unloadCartCheck = createAction(UNLOAD_CART);

export const listCarts = createAction(LIST_CART, (id) => id);

// saga 생성
const AddCartSaga = createRequestSaga(ADD_CART, cartAPI.createCart);
const updateCartSaga = createRequestSaga(UPDATE_CART, cartAPI.updateCart);
const readCartGETSaga = createRequestSaga(LIST_CART, cartAPI.readCart);
const checkCartSaga = createRequestSaga(CHECK_CART, cartAPI.checkCart);

export function* AddandUpdateCartSaga() {
  yield takeLatest(ADD_CART, AddCartSaga);
  yield takeLatest(UPDATE_CART, updateCartSaga);
  yield takeLatest(LIST_CART, readCartGETSaga);
  yield takeLatest(CHECK_CART, checkCartSaga);
}

const initialState = {
  cart: null,
  cartError: null,
  cartCheck: null,
};

const cart = handleActions(
  {
    [ADD_CART]: (state) => ({
      ...state,
      cart: null,
      cartError: null,
    }),
    [ADD_CART_SUCCESS]: (state, { payload: cart }) => ({
      ...state,
      cart: cart.cart,
    }),
    [ADD_CART_FAILURE]: (state, { payload: cartError }) => ({
      ...state,
      cartError,
    }),
    [UPDATE_CART_SUCCESS]: (state, { payload: cart }) => ({
      ...state,
      cart,
    }),
    [UPDATE_CART_FAILURE]: (state, { payload: cartError }) => ({
      ...state,
      cartError,
    }),
    [LIST_CART_SUCCESS]: (state, { payload: cart }) => ({
      ...state,
      cart,
    }),
    [LIST_CART_FALURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CHECK_CART_SUCCESS]: (state, { payload: cartCheck }) => ({
      ...state,
      cartCheck,
    }),
    [CHECK_CART_FAILURE]: (state, { payload: cartCheck }) => ({
      ...state,
      cartCheck,
    }),
    [UNLOAD_CART]: () => ({
      cartCheck: -1,
    }),
  },
  initialState
);

export default cart;
