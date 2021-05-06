const burgerNav = document.querySelector("#burger-nav");
const ulNav = document.querySelector("#banner nav ul");
let isClicked = true;
burgerNav.onclick = function () {
   if (isClicked) {
      ulNav.style.display = "inline-block";
      ulNav.classList.add("open");
      ulNav.classList.remove("close");
      burgerNav.classList.add("scale");

      setTimeout(function () {
         ulNav.classList.remove("reset");
      }, 1);
      // burgerNav.style.backgroundColor = "#f0423c";
      // burgerNav.style.border = "3px solid gray";
      // burgerNav.style.borderRadius = "15px";
      // burgerNav.style.padding = "5px 10px";
      // burgerNav.style.boxSizing = "border-box";
      // ulNav.style.marginBottom = "140px";
   }
   else {
      ulNav.classList.add("close");
      ulNav.classList.remove("open");
      burgerNav.classList.remove("scale");
      
      setTimeout(function () {
         ulNav.style.display = "none";
         ulNav.classList.add("reset");
         setTimeout(function(){
            ulNav.style.display = "inline-block";
         }, 500)
      }, 500);
      // burgerNav.style.backgroundColor = "#ededed";
      // burgerNav.style.border = "none";
   }
   isClicked = !isClicked;
}