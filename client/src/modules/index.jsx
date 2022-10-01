import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import post, { postSaga } from "./post";
import posts, { postsSaga } from "./posts";
import products, { productsSaga } from "./products";
import product_register, { product_writeSaga } from "./product_register";
import cart, { AddandUpdateCartSaga } from "./addCart";
import product, { productSaga } from "./product";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
  product,
  products,
  product_register,
  cart,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    productSaga(),
    productsSaga(),
    product_writeSaga(),
    AddandUpdateCartSaga(),
  ]);
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export default persistReducer(persistConfig, rootReducer);
