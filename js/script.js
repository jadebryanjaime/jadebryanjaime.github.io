$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  });
  // toggle menu/navbar
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
});

window.onscroll = function () { scrollRotate() };
function scrollRotate() {
  var navimg = document.getElementById("logo-center");
  navimg.style.transform = "rotate(" + (window.pageYOffset / 1) + "deg)"
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

var xValues = ["Angular", "C# .Net Core", "MS SQL Server", "Wordpress", "HTML5", "CSS", "TypeScript"];
var yValues = [10, 10, 8, 9, 8, 8, 10];
var barColors = ["#d63031", "#0984e3", "#2d3436", "#b2bec3", "#00b894", "#fdcb6e"];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Skills"
    }
  }
});