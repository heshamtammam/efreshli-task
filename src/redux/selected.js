const initialState = {
  selectedImages: [],
  selectedAccessories: [],
};

export function selectedImages(state = initialState, action) {
  switch (action.type) {
    case "SET_MAIN_IMG_SELECTED":
      return Object.assign({}, state, {
        selectedImages: [...state.selectedImages, action.payload],
      });

    case "REMOVE_MAIN_IMG_SELECTED":
      return Object.assign({}, state, {
        selectedImages: state.selectedImages.filter(
          (item) => item.id !== action.payload
        ),
      });

    case "SET_ACCESSORIES_SELECTED":
      return Object.assign({}, state, {
        selectedAccessories: [...state.selectedAccessories, action.payload],
      });

    case "REMOVE_ACCESSORIES_SELECTED":
      return Object.assign({}, state, {
        selectedAccessories: state.selectedAccessories.filter(
          (item) => item.src !== action.payload
        ),
      });

    default:
      return state;
  }
}
