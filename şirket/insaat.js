let photos = document.querySelectorAll(".ck img");
let currentPhoto = 0;

setInterval(function() {
  photos[currentPhoto].classList.remove("active");
  currentPhoto = (currentPhoto + 1) % photos.length;
  photos[currentPhoto].classList.add("active");
}, 5000);