const sparkle = document.querySelector(".sparkle");
var current_star_count = 0;
const MAX_STARS = 30;
const STAR_INTERVAL = 100;
const MAX_STAR_LIFE = 2;
const MIN_STAR_LIFE = 1;
const MAX_STAR_SIZE = 30;
const MIN_STAR_SIZE = 10;
const MIN_STAR_TRAVEL_X = 50;
const MIN_STAR_TRAVEL_Y = 50;

const Star = class {
  constructor() {
    this.size = this.random(MAX_STAR_SIZE, MIN_STAR_SIZE);
    this.x = this.random(
      sparkle.offsetWidth * 0.75,
      sparkle.offsetWidth * 0.25
    );

    this.y = sparkle.offsetHeight / 2 - this.size / 2;
    this.x_dir = this.randomMinus();
    this.y_dir = this.randomMinus();
    this.x_max_travel = this.x_dir === -1 ? this.x : sparkle.offsetWidth - this.x - this.size;
    this.y_max_travel = sparkle.offsetHeight / 2 - this.size;
    this.x_travel_dist = this.random(this.x_max_travel, MIN_STAR_TRAVEL_X);
    this.y_travel_dist = this.random(this.y_max_travel, MIN_STAR_TRAVEL_Y);
    this.x_end = this.x + this.x_travel_dist * this.x_dir;
    this.y_end = this.y + this.y_travel_dist * this.y_dir;
    this.life = this.random(MAX_STAR_LIFE, MIN_STAR_LIFE);
    this.star = document.createElement("div");
    this.star.classList.add("star");
    this.star.style.setProperty("--start-left", this.x + "px");
    this.star.style.setProperty("--start-top", this.y + "px");
    this.star.style.setProperty("--end-left", this.x_end + "px");
    this.star.style.setProperty("--end-top", this.y_end + "px");
    this.star.style.setProperty("--star-life", this.life + "s");
    this.star.style.setProperty("--star-life-num", this.life);
    this.star.style.setProperty("--star-size", this.size + "px");
  }

  draw() {
    sparkle.appendChild(this.star);
  }

  pop() {
    sparkle.removeChild(this.star);
  }

  random(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  randomMinus() {
    return Math.random() > 0.5 ? 1 : -1;
  }
};

setInterval(() => {
  if (current_star_count >= MAX_STARS) {
    return;
  }

  current_star_count++;
  var newStar = new Star();
  newStar.draw();

  setTimeout(() => {
    current_star_count--;

    newStar.pop();
  }, newStar.life * 1000);

}, STAR_INTERVAL);

document.addEventListener('DOMContentLoaded', () => {
  // ===================== Logo Lightbox =====================
    (function () {
        const logoEl = document.querySelector('.logo');
        if (!logoEl) return;
        const logoImg = logoEl.querySelector('.box img');
        if (!logoImg) return;

        logoEl.addEventListener('click', function () {
            if (document.querySelector('.logo-lightbox')) {
                return;
            }

            const rect = logoEl.getBoundingClientRect();
            const logoCX = rect.left + rect.width / 2;
            const logoCY = rect.top + rect.height / 2;
            const vpCX = window.innerWidth / 2;
            const vpCY = window.innerHeight / 2;
            const dx = logoCX - vpCX;
            const dy = logoCY - vpCY;

            const overlay = document.createElement('div');
            overlay.className = 'logo-lightbox';
            overlay.style.setProperty('--lbx', dx + 'px');
            overlay.style.setProperty('--lby', dy + 'px');

            const img = document.createElement('img');
            img.src = logoImg.src;
            img.className = 'logo-lightbox__img';
            img.alt = 'Logo';

            const closeBtn = document.createElement('button');
            closeBtn.className = 'logo-lightbox__close';
            closeBtn.setAttribute('aria-label', 'Cerrar');
            closeBtn.innerHTML = '&times;';

            overlay.appendChild(img);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);

            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    overlay.classList.add('logo-lightbox--open');
                });
            });

            function onKey(e) {
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            }

            function closeLightbox() {
                document.removeEventListener('keydown', onKey);
                overlay.classList.remove('logo-lightbox--open');
                overlay.classList.add('logo-lightbox--closing');
                window.setTimeout(function () {
                    overlay.remove();
                }, 420);
            }

            closeBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                closeLightbox();
            });

            overlay.addEventListener('click', function (e) {
                if (e.target === overlay) closeLightbox();
            });

            document.addEventListener('keydown', onKey);
        });
    }());

    // ===================== Generador de Sparks y Balls =====================
    const actionBtn = document.getElementById('action-btn');
    if (actionBtn) {
        const sparkPath = "M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z";
        let sparksHTML = "";
        for (let i = 0; i < 9; i++) {
            sparksHTML += `<svg ${i === 0 ? 'class="spark"' : 'class="spark"'} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${sparkPath}" fill="#000"/></svg>`;
        }
        actionBtn.insertAdjacentHTML('afterbegin', sparksHTML);
    }

    const ballsContainer = document.getElementById('balls-container');
    if (ballsContainer) {
        let ballsHTML = "";
        for (let i = 1; i <= 4; i++) {
            ballsHTML += `<div class="ball ball-${i}"></div>`;
        }
        ballsContainer.innerHTML = ballsHTML;
    }
});