// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function startSlideshow() {
    showSlides(slideIndex);
    setInterval(function () {
        plusSlides(1);
    }, 5000); // 5 seconds per slide
}

document.addEventListener("DOMContentLoaded", startSlideshow);


function validatePhoneNumber(input) {
    input.value = input.value.replace(/\D/g, '');
  
    if (input.value.length > 16) {
      input.value = input.value.slice(0, 16);  // Truncate the value to 16 digits
    }
  }

  function validateTextLength(input, maxLength) {
    // Ensure the length of the input does not exceed maxLength
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);  // Truncate the value to the max length
    }
  }
  
  