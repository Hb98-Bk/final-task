
$(document).ready(function(){

  $(".owl-carousel").owlCarousel(

    {
        items : 5,
        nav : true,

        navText : ['<i class="fa-solid fa-chevron-left bg-light text-danger"></i>' , '<i class="fa-solid fa-chevron-right"></i>']
  }
 );
});


let countdownDate = new Date().getTime() + (5 * 60 * 60 * 1000);

let timer = setInterval(function() {
  let now = new Date().getTime();
  let distance = countdownDate - now;


  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

  
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
}, 1000);


// تكبير  منتج الساعه
const mainImg = document.querySelector('.zoom-container img');

mainImg.addEventListener('mousemove', function(e) {
  const { left, top, width, height } = this.getBoundingClientRect();
  const x = ((e.pageX - left) / width) * 100;
  const y = ((e.pageY - top) / height) * 100;
  this.style.transformOrigin = `${x}% ${y}%`;
  this.style.transform = 'scale(2)'; // حجم التكبير
});

mainImg.addEventListener('mouseleave', function() {
  this.style.transformOrigin = 'center';
  this.style.transform = 'scale(1)';
});

// هتغيير الصورة
document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll(".thumb");
  const mainImg = document.querySelector(".main-img");

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", function () {
      mainImg.src = this.src; 
      thumbs.forEach(t => t.classList.remove("active-thumb")); 
      this.classList.add("active-thumb"); 
    });
  });
});





  const targetDate = new Date().getTime() + (10 * 60 * 60 * 1000);

  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = 
        '<span class="badge bg-success fs-6">انتهى العرض</span>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

  }, 1000);


//form

  let myForm = document.getElementById('myForm');

  myForm.addEventListener('input', (e) => {
   // console.log(" Input Detected:", e.target.id);

    if (e.target.id === "userName") {
      nameValidation(e.target);
    } else if (e.target.id === "userEmail") {
      emailValidation(e.target);
    }
  });

  function nameValidation(element) {
    let inputValue = element.value.trim();
    if (inputValue.length < 3) {
      handleError(element, "Enter at least 3 characters");
    } else {
      handleError(element);
    }
  }

  function emailValidation(input) {
    const emailRegex = /^[^\s@]+[]+]+$/;
    if (!emailRegex.test(input.value)) {
      handleError(input, "Please enter a valid email");
    } else {
      handleError(input);
    }
  }

  function handleError(input, msg = "") {
    input.nextElementSibling.innerText = msg;
  }
