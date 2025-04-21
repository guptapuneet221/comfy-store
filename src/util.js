const allProductUrl = `https://www.course-api.com/javascript-store-products`;
const singleProductUrl = `https://www.course-api.com/javascript-store-single-product`;

function getElement(selector) {
  let element;
  try {
    element = document.querySelector(selector);
    if (element) return element;
    else throw new Error("element is not found for teh given selector");
  } catch (err) {
    console.error(err);
  }
}

function getProductData() {
  return JSON.parse(localStorage.getItem("productData"));
}

export { allProductUrl, singleProductUrl, getElement, getProductData };
