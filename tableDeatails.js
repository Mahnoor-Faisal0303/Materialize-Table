const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id");

fetch(`https://fakestoreapi.com/products/${id}`)
  .then((response) => response.json())
  .then((product) => {
    const descriptionContainer = document.getElementById(
      "description-container"
    );
    descriptionContainer.innerHTML = `<p class="desParagraph">
        ${product.description}</p> 
        <img src="${product.image}" class="images"> `;
  })
  .catch((error) => console.error("Error fetching product details:", error));
  if(id<1 || id>20){
    const descriptionContainer = document.getElementById(
      "description-container"
    );
    descriptionContainer.innerHTML = `<p class="notFoundParagraph">Product not found</p>`
  }
