import * as typeActions from "../constants/cartConstants";
import axios from "axios";
export const addProductToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/product/${id}`);
    dispatch({
      type: typeActions.ADD_TO_CART,
      payload: {
        id: data[0].id,
        discount: data[0].discount,
        gender: data[0].gender,
        image: data[0].image,
        name: data[0].name,
        price: data[0].price,
        size: data[0].size,
        star: data[0].star,
        state: data[0].state,
        trademark: data[0].trademark,
        qty: qty,
      },
    });
  } catch (error) {
    console.log("ERROR ADD PRODUCT TO CART", error);
  }

  localStorage.setItem("cart", JSON.stringify(getState().cart));
};

export const removeProductFromCart = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: typeActions.REMOVE_FROM_CART,
      id,
    });
  } catch (error) {
    console.log("ERROR REMOVE PRODUCT FROM CART", error);
  }
  localStorage.setItem("cart", JSON.stringify(getState().cart));
};
