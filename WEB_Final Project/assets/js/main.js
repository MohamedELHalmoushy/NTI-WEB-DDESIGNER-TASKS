const NavScroll = document.querySelector("#NavScroll");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    NavScroll.classList.remove("d-none");
    NavScroll.classList.add("d-block");
  } else {
    NavScroll.classList.remove("d-block");
    NavScroll.classList.add("d-none");
  }
}

const btnNav = document.querySelector("#btn-nav");
const iconOpen = document.querySelector("#icon-open");
const iconClose = document.querySelector("#icon-close");
const MainNavScroll = document.querySelector("#MainNavScroll");

btnNav.addEventListener("click", function (e) {
  e.preventDefault();

  const isOpenVisible = iconOpen.classList.contains("d-block");

  if (isOpenVisible) {
    iconOpen.classList.remove("d-block");
    iconOpen.classList.add("d-none");
    iconClose.classList.remove("d-none");
    iconClose.classList.add("d-block");


    MainNavScroll.classList.remove("d-none");
    MainNavScroll.classList.add("d-block");
  } else {
    iconClose.classList.remove("d-block");
    iconClose.classList.add("d-none");
    iconOpen.classList.remove("d-none");
    iconOpen.classList.add("d-block");

    MainNavScroll.classList.remove("d-block");
    MainNavScroll.classList.add("d-none");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".product-tabs .nav-item a");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      tabs.forEach(t => t.classList.remove("active"));


      this.classList.add("active");


      panes.forEach(pane => pane.classList.remove("show", "active"));


      const target = document.querySelector(this.getAttribute("data-bs-target"));
      if (target) target.classList.add("show", "active");
    });
  });
});



document.querySelectorAll('.advanced-zoom-container').forEach(container => {
  const img = container.querySelector('.advanced-zoom-image');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
    const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 100;

    img.style.transform = `scale(2) translate(${-offsetX}%, ${-offsetY}%)`;
  });

  container.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1) translate(0,0)';
  });
});


function changeImage(element) {
  const newSrc = element.getAttribute('src');
  document.getElementById('mainImage').setAttribute('src', newSrc);
  document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active-thumbnail'));
  element.classList.add('active-thumbnail');
}



document.addEventListener('DOMContentLoaded', function () {
  const productsContainer = document.querySelector('.col-md-10');
  const listView = document.getElementById('list-view');
  const gridView = document.getElementById('grid-view');


  listView.addEventListener('click', function (e) {
    e.preventDefault();
    productsContainer.classList.remove('products-grid');
    productsContainer.classList.add('products-list');
    listView.classList.add('active');
    gridView.classList.remove('active');
  });

  gridView.addEventListener('click', function (e) {
    e.preventDefault();
    productsContainer.classList.remove('products-list');
    productsContainer.classList.add('products-grid');
    gridView.classList.add('active');
    listView.classList.remove('active');
  });

  productsContainer.classList.add('products-grid');
});
let countdownDate = new Date().getTime() + (2 * 60 * 60 * 1000); // مثال: بعد ساعتين

let timer = setInterval(function () {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("deal-countdown").innerHTML = `
    <div class="time-box">${("0" + hours).slice(-2)}<span class="label"></span></div>
    <div class="time-box">${("0" + minutes).slice(-2)}<span class="label"></span></div>
    <div class="time-box">${("0" + seconds).slice(-2)}<span class="label"></span></div>
  `;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("deal-countdown").innerHTML = "Expired";
  }
}, 1000);
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


