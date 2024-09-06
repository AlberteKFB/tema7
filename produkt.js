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
    document.querySelector(".price").textContent= "pris: " + product.price + ",00kr.";
    document.querySelector("img").src= `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
    document.querySelector("img").alt= product.productdisplayname;


        // Håndterer "Udsolgt"-status
        if (product.soldout) {
          document.querySelector(".soldOut2").style.display = "block"; // Viser "Udsolgt"-mærke
      } else {
          document.querySelector(".soldOut2").style.display = "none"; // Skjuler "Udsolgt"-mærke
      }
  
      // Håndterer rabat
      if (product.discount > 0) {
          document.querySelector(".discounted").style.display = "block"; // Viser rabat-sektionen
          const discountedPrice = Math.round(product.price - (product.price * product.discount) / 100);
          document.querySelector(".discounted p span").textContent = discountedPrice;
          document.querySelector(".discounted p+p span").textContent = product.discount;
      } else {
          document.querySelector(".discounted").style.display = "none"; // Skjuler rabat-sektionen, hvis ingen rabat
      }
  
    // if (product.soldout) {
    //     clone.querySelector("article").classList.add("soldOut"); 
    //     clone.querySelector(".soldOut2").style.display = "block"; 
    //   } else {
    //     clone.querySelector(".soldOut2").style.display = "none"; 
    //   }
   
      
    //   if (product.discount) {
    //     clone.querySelector("article").classList.add("discount");
    //     clone.querySelector(".discounted p span").textContent = Math.round(product.price - (product.price * product.discount) / 100);
    //     clone.querySelector(".discounted p+p span").textContent = product.discount;
    //   } else {
    //     clone.querySelector(".discounted").style.display = "none";  
    //   }
     
}

getProduct();