const allProductUrl = `https://www.course-api.com/javascript-store-products`;
const singleProductUrl = `https://www.course-api.com/javascript-store-single-product`;

function getElement(selector) {
  let container;
  try {
    container = document.querySelector(selector);
    if (container) return container;
    else throw new Error("element is not found for teh given selector");
  } catch (err) {
    console.error(err);
  }
}

export { allProductUrl, singleProductUrl, getElement };
