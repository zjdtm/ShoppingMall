import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as productsAPI from "../lib/api/product";
import { takeLatest } from "redux-saga/effects";

const [LIST_PRODUCTS, LIST_PRODUCTS_SUCCESS, LIST_PRODUCTS_FAILURE] =
  createRequestActionTypes("products/LIST_PRODUCTS");

const LIST_PRODUCTS_FILTER = "products/LIST_PRODUCTS_FILTER";

export const listProducts = createAction(
  LIST_PRODUCTS,
  ({ _id, title, body, price, tags, img, likeCount, createdAt }) => ({
    _id,
    title,
    body,
    price,
    tags,
    img,
    likeCount,
    createdAt,
  })
);

export const FilterlistProducts = createAction(LIST_PRODUCTS_FILTER);

const listProductsSaga = createRequestSaga(
  LIST_PRODUCTS,
  productsAPI.fetchProduct
);

export function* productsSaga() {
  yield takeLatest(LIST_PRODUCTS, listProductsSaga);
}

const initialState = {
  products: null,
  error: null,
  query: null,
  queryerror: null,
};

const products = handleActions(
  {
    [LIST_PRODUCTS_SUCCESS]: (state, { payload: products }) => ({
      ...state,
      products,
      query: null,
    }),
    [LIST_PRODUCTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_PRODUCTS_FILTER]: (state, { payload: query }) => ({
      ...state,
      query,
    }),
  },
  initialState
);

export default products;
