import { allProductUrl, getElement } from "./util.js";

async function getAllProductData() {
  const jsonData = await fetch(allProductUrl);
  const data = await jsonData.json();
  localStorage.setItem("productData", JSON.stringify(data));
  showAllProduct(data);
}

function showAllProduct(data) {
  let container = getElement(".product_container");
  container.innerHTML = data
    .map(({ id, fields: { name, price, image } }) => {
      return `
      <article>
  <div>
    <div class="relative group">
      <img src="${image[0].url}" class="w-[100%] h-[10rem] cover" />
      <div
        class="absolute top-1/2 left-1/2 translate-[-50%] opacity-0 group-hover:opacity-100"
      >
        <a>
          <ion-icon name="cart" size="large" class="text-orange-300"></ion-icon>
        </a>
        <button>
          <ion-icon
            name="search"
            size="large"
            class="text-orange-300"
          ></ion-icon>
        </button>
      </div>
    </div>
  </div>
  <footer class="text-center">
    <p class="capitalize font-light">${name}</p>
    <h4>₹${price}</h4>
  </footer>
</article>`;
    })
    .join("");
}

export { getAllProductData, showAllProduct };
