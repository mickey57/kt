const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;
let i = 0;
document.getElementById("tr1").scrollIntoView();

console.log(document.cookie);


if(document.cookie.indexOf("formSent") > -1)
{
  var elem = document.getElementById("bar");
  i = 2;
  elem.style.width = i*25 +"%"
  document.cookie = 'formSent' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.getElementById("tr3").scrollIntoView();
}

slide = (step) => {
  var elem = document.getElementById("bar");
  if(step === "koniec2" || step === "wplata2"){
    i +=2;
    translate -= 2*translateAmount;
    elem.style.width = i*25 +"%"
  }
  else{
    i += 1;
    translate -= translateAmount;
    elem.style.width = i*25 +"%"
  }


  pages.forEach(
    pages => (pages.style.transform = `translateX(${translate}%)`)
  )
}

function copyNum() {
  navigator.clipboard.writeText("38102010260000180203955127");
}
