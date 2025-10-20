class TeamCarousel {
  constructor() {
    this.track = document.querySelector('.team-track');
    this.slides = Array.from(document.querySelectorAll('.team-slide'));
    this.leftBtn = document.querySelector('.team-nav-left');
    this.rightBtn = document.querySelector('.team-nav-right');
    this.viewport = document.querySelector('.footer-team');

    this.currentIndex = 0;
    this.gap = 60;
    this.slidesToShow = 3;

    this.updateLayout();
    this.attachEvents();
  }

  getSlidesToShow() {
    const w = window.innerWidth;
    if (w <= 600) return 1;
    if (w <= 900) return 2;
    return 3;
  }

  updateLayout() {
    this.slidesToShow = this.getSlidesToShow();
    const viewportWidth = this.viewport.clientWidth;
    const totalGaps = this.gap * (this.slidesToShow - 1);
    const slideWidth = (viewportWidth - totalGaps) / this.slidesToShow;

    this.slides.forEach(slide => {
      slide.style.width = `${slideWidth}px`;
    });

    this.maxIndex = Math.max(0, this.slides.length - this.slidesToShow);
    this.updateCarousel(false);
  }

  attachEvents() {
    if (this.leftBtn) this.leftBtn.addEventListener('click', () => this.prev());
    if (this.rightBtn) this.rightBtn.addEventListener('click', () => this.next());
    window.addEventListener('resize', () => this.updateLayout());
  }

  next() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // loop around
    }
    this.updateCarousel(true);
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.maxIndex; // loop backward
    }
    this.updateCarousel(true);
  }

  updateCarousel(animate = true) {
    const slideWidth = this.slides[0].getBoundingClientRect().width;
    const totalVisibleWidth =
      this.slidesToShow * slideWidth + this.gap * (this.slidesToShow - 1);
    const leftover = (this.viewport.clientWidth - totalVisibleWidth) / 2;
    const offset = leftover - this.currentIndex * (slideWidth + this.gap);

    this.track.style.transition = animate ? 'transform 0.5s ease' : 'none';
    this.track.style.transform = `translateX(${offset}px)`;

    if (!animate) {
      void this.track.offsetHeight;
      this.track.style.transition = 'transform 0.5s ease';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => new TeamCarousel());
