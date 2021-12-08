(function() {
   setMinDate();

})();


function setMinDate(){
  let currentDate = new Date();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  document.getElementsByClassName('setMinDate')[0].min = year + "-" + month;
  console.log(`min date set for ${document.getElementsByClassName('setMinDate')[0].name}  (${year} - ${month})`);
}
function submitContact(){
  console.log(document.getElementsByClassName('contactForm')[0], 22);
}
