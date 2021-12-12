/*
Denna Fil är skriven i ES6+ och stöds inte i Internet explorer
att dekelerationer i let/const och användningen av `Backticks` m.m. stöds inte i IE11
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let


*/


// Array med alla produkter
const products = [
    { id: 1, title: "HTML/CSS kurs", description: "En grundläggande kurs i HTML och CSS", price: 123 },
    { id: 2, title: "JavaScript kurs", description: "En grundläggande kurs i JavaScript", price: 456 },
    { id: 3, title: "C# kurs", description: "En grundläggande kurs i C#", price: 789 },
];

// Hjälpfunktion som tar fram ett unikt "customer ID" från localstorage om det finns
// Annars genereras ett nytt.
// Prova att öppna sidan i incognitomode och se att du får ett nytt varje gång.
function getCustomerId() {
    let customerId = localStorage.getItem("customerid");
    if (customerId === null) {
        customerId = Math.floor(Math.random() * 1000000000) + 1000000000;
        localStorage.setItem("customerid", customerId);
        localStorage.setItem("cart", "");
    }

    return customerId;
}

// Funktion som lägger till produkt med ett visst ID till localstorage
function addToCart(id) {

    if (!localStorage.getItem("cart")){localStorage.setItem("cart", "");}
    for (let product of products) {
        if (product.id === id) {

            localStorage.setItem("cart", localStorage.getItem("cart") + id + ",")
        }
    }
    displayCart();
}

// Returnerar varukorgens innehåll uppdelad i en array
function getCart() {
    return localStorage.getItem("cart").trim(",").split(",");
}

// Funktion som ritar upp alla produkter (se arrayen högst upp)
// till div med klassen container
function displayProducts() {
    let container = document.querySelector(".container");

    for (let product of products) {
        container.innerHTML +=
            `<div class="item">` +
            `<h2>${product.title}</h2>` +
            `<p>${product.description}</p>` +
            `<p>Pris: <b>${product.price}</b></p>` +
            `<button onclick="addToCart(${product.id})">Köp</button>`;
    }

}

// Funktion som ritar upp innehållet i varukorgen till div
// med klass cartcontainer
function displayCart() {
  let totalPrice = 0;
  let basket = {1:0,2:0,3:0};
  let cartContainer = document.getElementsByClassName("cartcontainer")[0];
  let cart = localStorage.getItem("cart").trim(",").split(",");

  for (let id of cart) {
      for (let product of products) {
          if (product.id == id) {
              totalPrice += product.price;
          }
      }
  }
  localStorage.setItem("cartTotal", totalPrice);

  for (let i = 0; i < cart.length; i++) {
    basket[cart[i]] = basket[cart[i]] +1;
  }
  document.getElementsByClassName('emptyCart')[0].style.display = "block";
  cartContainer.innerHTML= `Ligger nu i din varukorg <br>
  ${basket[1]}st av ${products[0].title}, ${products[0].price}kr/st <br>
  ${basket[2]}st av ${products[1].title}, ${products[1].price}kr/st <br>
  ${basket[3]}st av ${products[2].title}, ${products[2].price}kr/st <br>
  för totalt: ${totalPrice}kr`;







}
function emptyCart() {
  localStorage.setItem("cart", "");
  document.getElementsByClassName("cartcontainer")[0].innerHTML = "<p>Din varukorg är nu tom</p>";
}
// Se alltid till att försöka hitta customerID på varje sida
getCustomerId();
