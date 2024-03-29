---
title: Image Slider
subtitle: test image slider
layout: base
order: 13
---

<style>
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.carousel {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.carousel > ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: 200ms opacity ease-in-out;
  transition-delay: 200ms;
}

.slide > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.slide[data-active] {
  opacity: 1;
  z-index: 1;
  transition-delay: 0ms;
}

.carousel-button {
  position: absolute;
  z-index: 2;
  background: none;
  border: none;
  font-size: 4rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, .5);
  cursor: pointer;
  border-radius: .25rem;
  padding: 0 .5rem;
  background-color: rgba(0, 0, 0, .1);
}

.carousel-button:hover,
.carousel-button:focus {
  color: white;
  background-color: rgba(0, 0, 0, .2);
}

.carousel-button:focus {
  outline: 1px solid black;
}

.carousel-button.prev {
  left: 3rem;
}

.carousel-button.next {
  right: 3rem;
}
</style>

<section aria-label="Newest Photos">
  <div class="carousel" data-carousel>
    <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
    <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
    <ul data-slides>
      <li class="slide" data-active>
        <img src="https://dplusa.s3-ap-southeast-1.amazonaws.com/uploads/d-a-design-and-architecture-national-gallery-singapore-ngs-8.jpg" alt="Image #1">
      </li>
      <li class="slide">
        <img src="https://dplusa.s3-ap-southeast-1.amazonaws.com/uploads/d-a-design-and-architecture-national-gallery-singapore-ngs-7.jpg" alt="Image #2">
      </li>
      <li class="slide">
        <img src="https://dplusa.s3-ap-southeast-1.amazonaws.com/uploads/d-a-design-and-architecture-national-gallery-singapore-ngs-6.jpg" alt="Image #3">
      </li>
    </ul>
  </div>
</section>

<script>
  const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
</script>
