export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    // omit other cases
    case "todos/todosLoading": {
      // ❌ WARNING: example only - don't do this in a normal reducer!
      state.status = "loading";
      return state;
    }
    default:
      return state;
  }
}
