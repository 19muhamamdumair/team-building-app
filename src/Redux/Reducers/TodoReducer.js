import * as actionTypes from "../Action/ActionTypes";
const initialState = {
  todo: [],
};
const TodoReducer = (state = initialState, action) => {
  if (action.type === actionTypes.CREATE_TODO) {
    return {
      ...state,
      todo: [...state.todo, action.payload],
    };
  }
  if (action.type === actionTypes.DELETE_TODO) {
    return {
      ...state,
      todo: state.todo.filter((todo) => {
        return todo.id !== action.payload;
      }),
    };
  }
  if (action.type === actionTypes.UPDATE_TODO) {
    const prevState = state.todo;
    let tempArray = [];
    prevState.map((todo) => {
      if (todo.id === action.payload.id) {
        tempArray.push({ ...todo, title: action.payload.title });
      } else {
        tempArray.push(todo);
      }
    });
    state.todo = tempArray;
  }
  return state;
};
export default TodoReducer;
