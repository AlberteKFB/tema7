const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct(){
    fetch(url).then((res)=> res.json())
    .then(visProduct);
}

function visProduct(product){
    document.querySelector(".navn").textContent=product.productdisplayname;
    document.querySelector(".info3 h1").textContent=product.productdisplayname;
    document.querySelector(".brand").textContent=product.brandname;
    document.querySelector("img").src= `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
    document.querySelector("img").alt= product.productdisplayname;

}

getProduct();