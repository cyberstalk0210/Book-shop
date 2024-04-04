const searchBtn = document.querySelector('#search-btn'),
  searchForm = document.querySelector('.search-form');
let loginForm = document.querySelector('.login-form-container'),
  loginBtn = document.querySelector('#login-btn'),
  closeBtn = document.querySelector('#close-login-btn'),
  loader = document.querySelector('.loader-container');

loginBtn.addEventListener('click', () => {
  loginForm.classList.toggle('active');
})

closeBtn.addEventListener('click', () => {
  loginForm.classList.remove('active');
})

searchBtn.addEventListener('click', () => {
  searchForm.classList.toggle('active');
})
window.onscroll = () => {
  searchForm.classList.remove('active');
  if (window.scrollY > 80) {
    const navbar = document.querySelector('.header .header-2').classList.add('fixed');
  } else {
    document.querySelector('.header .header-2').classList.remove('fixed');
  }
}
window.onload = () => {
  if (window.scrollY > 80) {
    const navbar = document.querySelector('.header .header-2').classList.add('fixed');
  } else {
    document.querySelector('.header .header-2').classList.remove('fixed');
  }
}
setTimeout(() => {
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
}, 3500);



var swiper = new Swiper(".book-slider", {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper(".popular-slider", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  loop: true,
  grabCurson: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  loop: true,
  grabCurson: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});
const business = document.querySelector(".business"),
  wrapperBusiness = document.querySelectorAll("#business"),
  wrapperAllGenres = document.querySelectorAll("#allGenres"),
  wrapperFiction = document.querySelectorAll("#fiction"),
  wrapperScience = document.querySelectorAll("#science"),
  wrapperPhilosoph = document.querySelectorAll("#philosoph"),
  wrapperBio = document.querySelectorAll("#bio"),
  allGenres = document.querySelector(".allGenres"),
  science = document.querySelector(".science"),
  fiction = document.querySelector(".fiction"),
  philosoph = document.querySelector(".philosoph"),
  bio = document.querySelector(".bio"),
  btn = document.querySelector(".btn")


const addShowClass = function (array) {
  array.forEach((item) => {
    item.classList.add("show")
  })
}
const addRemoveClass = function (array) {
  array.forEach((item) => {
    item.classList.remove("show")
    item.classList.remove("hide")
  })
}
const addhideClass = function (array) {
  array.forEach((item) => {
    item.classList.add("hide")
  })
}

allGenres.addEventListener("click", () => {
  addRemoveClass(wrapperAllGenres);
  addRemoveClass(wrapperBusiness);
  addRemoveClass(wrapperScience)
  addRemoveClass(wrapperFiction)
  addRemoveClass(wrapperPhilosoph)

  addRemoveClass(wrapperBio)

})

business.addEventListener("click", () => {
  addhideClass(wrapperAllGenres);

  addShowClass(wrapperBusiness);

  addRemoveClass(wrapperScience)
  addRemoveClass(wrapperFiction)
  addRemoveClass(wrapperPhilosoph)
  addRemoveClass(wrapperBio)
})
science.addEventListener("click", () => {
  addhideClass(wrapperAllGenres);
  addRemoveClass(wrapperBusiness);
  addRemoveClass(wrapperFiction)
  addRemoveClass(wrapperPhilosoph)
  addRemoveClass(wrapperBio)

  addShowClass(wrapperScience)
})
fiction.addEventListener("click", () => {
  addhideClass(wrapperAllGenres);
  addRemoveClass(wrapperBusiness);
  addRemoveClass(wrapperScience)
  addRemoveClass(wrapperPhilosoph)
  addRemoveClass(wrapperBio)

  addShowClass(wrapperFiction)
})

philosoph.addEventListener("click", () => {
  addhideClass(wrapperAllGenres);
  addRemoveClass(wrapperBusiness);
  addRemoveClass(wrapperScience)
  addRemoveClass(wrapperFiction)

  addShowClass(wrapperPhilosoph)
  addRemoveClass(wrapperBio)
})
bio.addEventListener("click", () => {
  addhideClass(wrapperAllGenres);
  addRemoveClass(wrapperBusiness);
  addRemoveClass(wrapperScience)
  addRemoveClass(wrapperPhilosoph)
  addRemoveClass(wrapperFiction)

  addShowClass(wrapperBio)
})