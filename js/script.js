$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active"); 
        $('.menu-btn i').toggleClass("active"); 
    });
});

window.onscroll = function () { scrollRotate() };
function scrollRotate() {
    var navimg = document.getElementById("logo-center");
    navimg.style.transform = "rotate(" + (window.pageYOffset / 0.5) + "deg)"
}

const checkpoint = 300;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector("#logo-center").style.opacity = opacity;
});