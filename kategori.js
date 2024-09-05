

const categoryList = document.querySelector("#categoryList");

// const params = new URLSearchParams(document.location.search);
// const category = params.get("category");
// let url = undefined;

// if (params.has("category")) {
//   url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
// } else {
//   url = "https://kea-alt-del.dk/t7/api/products";
// }

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    
    categories.forEach((category) => {
      categoryList.innerHTML += `<li><a href="produktliste.html?category=${category.category}">${category.category}</a></li>`;
    });
  });




/***/

