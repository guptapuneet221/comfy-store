import { getAllProductData, showAllProduct } from "./src/getAllProduct.js";
import { getProductData, getElement } from "./src/util.js";

getAllProductData();
const form = getElement("#form1");
const input = getElement("#price_range");
const value = getElement("#price_value");
const filterList = getElement(".filter_list");
const search = getElement("#search");

filterList.addEventListener("click", (e) => {
  if (e.currentTarget == e.target) return;
  filterProduct(e.target.dataset.id);
});

function filterProduct(filter) {
  let data = JSON.parse(localStorage.getItem("productData"));
  if (filter.toLowerCase() == "all") {
    showAllProduct(data);
    return;
  }
  data = data.filter(
    (item) => item.fields.company.toLowerCase() == filter.toLowerCase()
  );
  showAllProduct(data);
}

function filterPrice(price) {
  let data = getProductData();
  data = data.filter((item) => item.fields.price <= price);
  showAllProduct(data);
}

function filterName(name) {
  let data = getProductData();
  data = data.filter((item) => {
    console.log(item.fields.name.toLowerCase().includes(name));

    if (item.fields.name.toLowerCase().includes(name)) return true;
    return false;
  });
  showAllProduct(data);
}

input.addEventListener("input", (e) => {
  e.preventDefault();
  value.innerHTML = e.target.value;
  filterPrice(e.target.value);
});

search.addEventListener("change", (e) => {
  filterName(e.target.value.toLowerCase());
});

form.addEventListener("submit", (e) => e.preventDefault());
