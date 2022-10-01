import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as productAPI from "../lib/api/product";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "product_register/INITIALIZE";
const CHANGE_FIELD = "product_register/CHANGE_FIELD";

const [
  PRODUCT_REGISTER_POST,
  PRODUCT_REGISTER_POST_SUCCESS,
  PRODUCT_REGISTER_POST_FAILURE,
] = createRequestActionTypes("product_register/PRODUCT_REGISTER_POST");
const SET_ORIGINAL_PRODUCT = "product_register/SET_ORIGINAL_PRODUCT";

const [
  PRODUCT_UPDATE_POST,
  PRODUCT_UPDATE_POST_SUCCESS,
  PRODUCT_UPDATE_POST_FAILURE,
] = createRequestActionTypes("product_register/PRODUCT_UPDATE_POST");

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const product_registerPost = createAction(
  PRODUCT_REGISTER_POST,
  ({ name, manufacturer, product_image, product_info, price }) => ({
    name,
    manufacturer,
    product_image,
    product_info,
    price,
  })
);

export const setOriginalPrdocut = createAction(
  SET_ORIGINAL_PRODUCT,
  (product) => product
);

export const product_updatePost = createAction(
  PRODUCT_UPDATE_POST,
  ({ name, manufacturer, product_image, product_info, price }) => ({
    name,
    manufacturer,
    product_image,
    product_info,
    price,
  })
);

const product_registerSaga = createRequestSaga(
  PRODUCT_REGISTER_POST,
  productAPI.createProduct
);
const product_updateSaga = createRequestSaga(
  PRODUCT_UPDATE_POST,
  productAPI.updateProduct
);

export function* product_writeSaga() {
  yield takeLatest(PRODUCT_REGISTER_POST, product_registerSaga);
  yield takeLatest(PRODUCT_UPDATE_POST, product_updateSaga);
}

const initialState = {
  name: "",
  manufacturer: "",
  product_image: "",
  product_info: "",
  price: 0,
  likeCount: 0,
  product: null,
  productError: null,
  originalProductId: null,
};

const product_register = handleActions(
  {
    [INITIALIZE]: (state) => ({ ...state, initialState }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [PRODUCT_REGISTER_POST]: (state) => ({
      ...state,
      product: null,
      productError: null,
    }),
    [PRODUCT_REGISTER_POST_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product,
    }),
    [PRODUCT_REGISTER_POST_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      productError,
    }),
    [PRODUCT_UPDATE_POST_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product,
    }),
    [PRODUCT_UPDATE_POST_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      productError,
    }),
  },
  initialState
);

export default product_register;
