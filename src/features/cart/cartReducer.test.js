// src/features/cart/cartReducer.test.js
import { cartReducer, initialState } from "./cartReducer";

describe("cartReducer", () => {
  it("adds a new item", () => {
    const action = {
      type: "ADD_ITEM",
      payload: { id: 1, title: "Shoes", quantity: 2 },
    };
    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([{ id: 1, title: "Shoes", quantity: 2 }]);
  });

  it("increments quantity if item already exists", () => {
    const state = [{ id: 1, title: "Shoes", quantity: 2 }];
    const action = {
      type: "ADD_ITEM",
      payload: { id: 1, title: "Shoes", quantity: 3 },
    };
    const newState = cartReducer(state, action);
    expect(newState).toEqual([{ id: 1, title: "Shoes", quantity: 5 }]);
  });

  it("removes an item", () => {
    const state = [
      { id: 1, title: "Shoes", quantity: 2 },
      { id: 2, title: "Hat", quantity: 1 },
    ];
    const action = { type: "REMOVE_ITEM", payload: { id: 1 } };
    const newState = cartReducer(state, action);
    expect(newState).toEqual([{ id: 2, title: "Hat", quantity: 1 }]);
  });

  it("updates quantity", () => {
    const state = [{ id: 1, title: "Shoes", quantity: 2 }];
    const action = { type: "UPDATE_QUANTITY", payload: { id: 1, quantity: 5 } };
    const newState = cartReducer(state, action);
    expect(newState).toEqual([{ id: 1, title: "Shoes", quantity: 5 }]);
  });

  it("clears the cart", () => {
    const state = [
      { id: 1, title: "Shoes", quantity: 2 },
      { id: 2, title: "Hat", quantity: 1 },
    ];
    const action = { type: "CLEAR_CART" };
    const newState = cartReducer(state, action);
    expect(newState).toEqual([]);
  });

  it("returns current state for unknown action", () => {
    const state = [{ id: 1, title: "Shoes", quantity: 2 }];
    const action = { type: "UNKNOWN_ACTION" };
    const newState = cartReducer(state, action);
    expect(newState).toEqual(state);
  });
});
