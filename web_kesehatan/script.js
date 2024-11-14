const menuButton = document.getElementById ('container-img-menu')
console.log(menuButton);


menuButton.addEventListener("click", function (){
     imgMenu = document.getElementById("imgMenu")
     const menuMobile = document.getElementById("container-nav-mobile")
     menuMobile.classList.toggle("show-container-nav-mobile")
     if(menuMobile.classList.contains("show-container-nav-mobile")){
          imgMenu.setAttribute("src", "close.png")
     }else {
          imgMenu.setAttribute("src", "menu.png")
     }

})