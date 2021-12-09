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
  let data = localStorage.getItem("customerinfo");
  console.log(document.getElementsByClassName('contactDisplay')[0]
  );
  if(document.getElementsByClassName('contactDisplay')[0]){ document.getElementsByClassName('contactDisplay')[0].innerText = data;}
  console.log(data);
  console.log(localStorage.getItem("customerPayment"));
}

function getCustomerInfo(formtype) {
  let info = "{";
  let form = document.getElementsByClassName(formtype)[0];

  for (let i = 0; i < form.getElementsByTagName('input').length; i++) {
    console.log(form.getElementsByTagName('input')[i].value);
    if (i == form.getElementsByTagName('input').length -1 ){
      info += "'" + form.getElementsByTagName('input')[i].name + "':'" + form.getElementsByTagName('input')[i].value + "'}";
    }
    else {
      info += "'" + form.getElementsByTagName('input')[i].name + "':'" + form.getElementsByTagName('input')[i].value + "',";
    }

  }
  if (formtype == 'contactForm'){localStorage.setItem("customerinfo", info);}
  else {localStorage.setItem("customerPayment", info); }
  console.log(localStorage.getItem("payment", "customerPayment"), localStorage.getItem("info", "customerinfo"));
}
