function countReducer({ count, ...state }, { type, payload }) {
  switch (type) {
    case ADD_N:
      return { ...state, count: count + payload };
    case ADD_ONE:
      return { ...state, count: count + 1 };
  }
}
