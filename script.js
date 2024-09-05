window.addEventListener("DOMContentLoaded", init);

// let productsURI = "https://kea-alt-del.dk/t7/api/products";
const urlParams = new URLSearchParams(window.location.search);

let productList;
let productTemplate;

const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;

if (params.has("category")) {
  url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
} else {
  url = "https://kea-alt-del.dk/t7/api/products";
}


function init() {
  productList = document.querySelector("#product_list");
  console.log("productList", productList);

  productTemplate = document.querySelector("template").content;
  console.log("productTemplate", productTemplate);

  fetch(url)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then(handleData);
}

function handleData(json) {
  console.log("json", json);
  json.forEach(showProduct);
}

function showProduct(product) {
  const clone = productTemplate.cloneNode(true);
  clone.querySelector("h3").textContent = product.productdisplayname;
  clone.querySelector(".navn").textContent = product.brandname;
  clone.querySelector(".price").textContent = product.price;
  clone.querySelector("img").src= `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`
  clone.querySelector("a").href = `produkt.html?id=${product.id}`;
  // if(product.soldout){
  //   clone.querySelector("article").classList.add("soldOut"); 
  // }
  if (product.soldout) {
    clone.querySelector("article").classList.add("soldOut"); 
    clone.querySelector(".soldOut2").style.display = "block";
  } else {
    clone.querySelector(".soldOut2").style.display = "none"; 
  }
  // if (product.discount){
  //   clone.querySelector("article").classList.add("discount");
  //   clone.querySelector(".discounted p span").textContent = Math.round(product.price - (product.price * product.discount) / 100);
  //   clone.querySelector(".discounted p+p span").textContent = product.discount;
  // }
  if (product.discount) {
    clone.querySelector("article").classList.add("discount");
    clone.querySelector(".discounted p span").textContent = Math.round(product.price - (product.price * product.discount) / 100);
    clone.querySelector(".discounted p+p span").textContent = product.discount;
  } else {
    clone.querySelector(".discounted").style.display = "none";  
  }
 
  productList.appendChild(clone);


}