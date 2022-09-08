import { createAction, handleActions } from "redux-actions";
import * as productAPI from "../lib/api/product";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const [READ_PRODUCT, READ_PORDUCT_SUCCESS, READ_PRODUCT_FAILURE] =
  createRequestActionTypes("product/READ_PRODUCT");

const UNLOAD_PRODUCT = "product/UNLOAD_PRODUCT"; // 제품 페이지에서 벗어날 때 데이터 비우기

export const readProduct = createAction(READ_PRODUCT, (id) => id);
export const unloadProduct = createAction(UNLOAD_PRODUCT);

const readProductSaga = createRequestSaga(READ_PRODUCT, productAPI.readProduct);
export function* productSaga() {
  yield takeLatest(READ_PRODUCT, readProductSaga);
}

const initialState = {
  product: null,
  error: null,
};

const product = handleActions(
  {
    [READ_PORDUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product,
    }),
    [READ_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_PRODUCT]: () => initialState,
  },
  initialState
);

export default product;
