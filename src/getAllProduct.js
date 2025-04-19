import { allProductUrl, getElement } from "./util.js";

async function getAllProductData() {
  const jsonData = await fetch(allProductUrl);
  const data = await jsonData.json();
  showAllProduct(data);
}

function showAllProduct(data) {
  let container = getElement(".product_container");
  console.log(container);

  container.innerHTML = data
    .map(({ id, fields: { name, price, image } }) => {
      return `
        <article>
        <div class="relative">
          <img src="${image[0].url}" class="w-[100%] h-[10rem] cover"/>
          <div>
          <div class="absolute top-1/2 left-1/2" ><ion-icon name="cart" size="small"></ion-icon></div>
          <button class="absolute top-1/2 left-1/2" ><ion-icon name="search" size="small"></ion-icon></button>
          </div>
          </div>
          <footer class="text-center">
          <p class='capitalize'>${name}</p>
          <h4>${price}</h4>
          </footer>
        </article>`;
    })
    .join("");
}

export { getAllProductData };
