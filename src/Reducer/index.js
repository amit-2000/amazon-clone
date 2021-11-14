export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { 
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
export default reducer;
