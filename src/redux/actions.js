// image reducer action

export function getBigImages(imgs) {
  return {
    type: "GET_BIG_IMAGES",
    payload: imgs,
  };
}

export function getAccessories(data) {
  return {
    type: "GET_ACCESSORIES",
    payload: data,
  };
}

// step1 actions

export function setMainImgSelected(img) {
  return {
    type: "SET_MAIN_IMG_SELECTED",
    payload: img,
  };
}

export function removeMainImgSelected(src) {
  return {
    type: "REMOVE_MAIN_IMG_SELECTED",
    payload: src,
  };
}

export function setAccessoriesImgSelected(img) {
  return {
    type: "SET_ACCESSORIES_SELECTED",
    payload: img,
  };
}

export function removeAccessoriesImgSelected(id) {
  return {
    type: "REMOVE_ACCESSORIES_SELECTED",
    payload: id,
  };
}
