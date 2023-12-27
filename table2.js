const loader = document.getElementById("loader");
let variable = false;
const myContainer = document.getElementById("myContainer");

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    loader.classList.add("displayNone");
    let status = `${response.status}`;
    console.log(status);
    if (status > 400 && status < 600) {
      myContainer.classList.add("displayNone");
      throw new Error(`Error of status code : ${response.status}`);
    } else {
      variable = true;
      return response.json();
    }
  })
  .then((data) => {
    if (variable == true) {
      const tableContent = document.getElementById("table-content");
      data.forEach((products) => {
        const row = document.createElement("tr");
        row.innerHTML = `
             <td>${products.id}</td>
             <td>${products.title}</td>
             <td>${products.price}</td>
             <td><button class="viewButton" onclick="clickMe('${products.id}')" >Details</button></td>
         `;
        tableContent.appendChild(row);
      });
    }
  });

function clickMe(productId) {
  window.location.href = `tableDetails.html?id=${productId}`;
}
