const menuButton = document.getElementById ('cont-menu-logo')
console.log(menuButton);


menuButton.addEventListener("click", function (){
     imgMenu = document.getElementById("img-menu")
     const menuMobile = document.getElementById("cont-nav-mobile")
     menuMobile.classList.toggle("show-cont-nav-mobile")
     if(!menuMobile.classList.contains("show-cont-nav-mobile")){
          imgMenu.setAttribute("src", "img/menu.png")
     }else {
          imgMenu.setAttribute("src", "img/close.png")
          
     }

})


document.addEventListener("DOMContentLoaded", function () {
     const images = document.querySelectorAll(".cont");
 
     const observer = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 entry.target.classList.add("animate"); // Menambahkan kelas animasi
                 observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi berjalan
             }
         });
     }, { threshold: 0.5 }); // Threshold 0.5 berarti animasi berjalan ketika 50% elemen terlihat
 
     images.forEach(img => observer.observe(img));
 });
 

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault()
    alert("data telah terkirim")
})