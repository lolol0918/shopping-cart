// cart start as  empty
export const initialState = [];

//passing the contents of the cart and what action it will do e.g add items, remove items, or clear items.
export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // check if the item is in the shopping cart
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        //increment quantity
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        );
      } else {
        return [...state, { ...action.payload }];
      }

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);

    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item,
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}
