import * as types from "./constants/actionTypes";

export const increaseCount = () => {
  return {
    type: types.INCREASE_COUNT,
  };
};

export const decreaseCount = () => {
  // Complete me
  return {
    type: types.DECREASE_COUNT,
  };
};

export const toggle = () => {
  // Complete me
  return {
    type: types.TOGGLE_TEXT,
  };
};

export const pickColor = (color) => {
  // Complete me
  return {
    type: types.PICK_COLOR,
    color,
  };
};

export const setInput = (todoInput) => {
  // Complete me
  return {
    type: types.SET_INPUT,
    todoInput,
  };
};

export const addTodo = () => {
  // Complete me
  return {
    type: types.ADD_TODO,
  };
};
