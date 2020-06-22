const initialState = {
  bigImages: [],
  accessories: [],
};
export function imageData(state = initialState, action) {
  switch (action.type) {
    case "GET_BIG_IMAGES":
      return Object.assign({}, state, {
        ...state,
        bigImages: action.payload,
      });
    case "GET_ACCESSORIES":
      return Object.assign({}, state, {
        ...state,
        accessories: action.payload,
      });
    default:
      return state;
  }
}
