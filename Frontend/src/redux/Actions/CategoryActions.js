import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
} from "../Constants/CategoryConstants";
import axios from "axios";

// Category list
export const lisCategories = () => async (dispatch) => {
  // export const lisCategories = () => async (dispatch, getState) => {
  try {
    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: { Authorization: `Bearer ${userInfo.token}` },
    // };

    dispatch({ type: CATEGORY_LIST_REQUEST });
    const { data } = await axios.get(`/api/categories`);
    // const { data } = await axios.get(`/api/categories`, config);
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  // }
};
