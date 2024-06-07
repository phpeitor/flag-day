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

    this.x_max_travel =
      this.x_dir === -1 ? this.x : sparkle.offsetWidth - this.x - this.size;
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
