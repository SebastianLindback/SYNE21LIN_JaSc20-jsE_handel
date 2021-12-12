(function() {


})();


function setMinDate(){
  let currentDate = new Date();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  document.getElementsByClassName('setMinDate')[0].min = year + "-" + month;
  console.log(`min date set for ${document.getElementsByClassName('setMinDate')[0].name}  (${year} - ${month})`);
}
function displayContact() {
  console.log("Load");
  let data = JSON.parse( localStorage.getItem("customerinfo"));
  let contactInfo= `<p>Namn: ${data.firstname} ${data.lastname}<br> Kontakt:${data.email}, ${data.phone} <br> Adress: ${data.country}, ${data.areacode} </p>`;

  console.log(document.getElementsByClassName('contactDisplay')[0]);
  if(document.getElementsByClassName('contactDisplay')[0]){ document.getElementsByClassName('contactDisplay')[0].innerHTML = contactInfo;}
  console.log(data);
  console.log(localStorage.getItem("customerPayment"));
}

function getCustomerInfo(formtype) {
  let info = "{";
  let form = document.getElementsByClassName(formtype)[0];

  for (let i = 0; i < form.getElementsByTagName('input').length; i++) {
    console.log(form.getElementsByTagName('input')[i].value);
    info += `"${form.getElementsByTagName('input')[i].name}":"${form.getElementsByTagName('input')[i].value}",`;

  }
    info = info.substring(0, info.length -1);
    info += `}`;
  if (formtype == 'contactForm'){localStorage.setItem("customerinfo", info);}
  else {localStorage.setItem("customerPayment", info); }
  console.log(localStorage.getItem("payment", "customerPayment"), localStorage.getItem("info", "customerinfo"));
}
function receiptPrint() {
  console.log("receipt");
  let totalAmount = localStorage.getItem('cartTotal');
  let basket = {1:0,2:0,3:0};
  let cart = localStorage.getItem("cart").trim(",").split(",");
  let info = JSON.parse( localStorage.getItem("customerinfo"));
  let payment = JSON.parse( localStorage.getItem("customerPayment"));
  let classifiedCard = payment.creditcard;
  classifiedCard = classifiedCard.replace(classifiedCard.substring(0, classifiedCard.length -4), '**** **** **** ');

  let receipt= `<p>Namn: ${info.firstname} ${info.lastname}<br>
  Kontakt:${info.email}, ${info.phone} <br>
  Adress: ${info.country}, ${info.areacode}<br>
  bankkonto: ${classifiedCard}</p>`;

  console.log(cart, cart.length, products[1]);
  for (let i = 0; i < cart.length; i++) {
    basket[cart[i]] = basket[cart[i]] +1;
  }
  console.log(basket);

  let orderTotal = `<p>Du har beställt: <br>
  ${basket[1]}st av ${products[0].title}, ${products[0].price}kr/st <br>
  ${basket[2]}st av ${products[1].title}, ${products[1].price}kr/st <br>
  ${basket[3]}st av ${products[2].title}, ${products[2].price}kr/st <br>
  för totalt: ${totalAmount}</p>`;
  document.getElementsByClassName('receipt')[0].innerHTML = orderTotal + receipt;
}
function dataClear() {
  localStorage.removeItem("cart");
  localStorage.removeItem("cartTotal");
  localStorage.removeItem("customerPayment");
  localStorage.removeItem("customerinfo");
  localStorage.removeItem("customerid");

}
