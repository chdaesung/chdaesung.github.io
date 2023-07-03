
    // Added JavaScript to handle smooth scrolling on navigation links
    document.addEventListener('DOMContentLoaded', function() {
      const navbarLinks = document.querySelectorAll('.navbar a');
      navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      });
    });
 
// JavaScript code for the image slider
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const sliderInner = document.querySelector('.slider-inner');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0 || index >= slides.length) {
      return;
    }

    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });

    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

// JavaScript code for the image slider
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const sliderInner = document.querySelector('.slider-inner');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0 || index >= slides.length) {
      return;
    }

    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });

    slides[index].classList.add('active');
  }

  function goToPreviousSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
  }

  function goToNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  prevButton.addEventListener('click', goToPreviousSlide);
  nextButton.addEventListener('click', goToNextSlide);
});
