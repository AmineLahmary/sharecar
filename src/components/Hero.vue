<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__heading">Experience Luxury on Wheels</h1>
        <p class="hero__sub-heading">
          Premium vehicles, unmatched comfort, elite service.
        </p>
      </div>
      <div class="hero__image">
        <img src="/images/renault-clio.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
* {
  border: 1px solid transparent;
}
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: max(12vw, 20vh);
  padding-inline: 20px;
  margin-bottom: max(12vw, 20vh);
  background-image: url("/images/bg-v1.jpg");
  background-position: center;
  background-color: hsl(0, 0%, 20%);
  background-blend-mode: multiply;
  border-radius: 20px;
}
.hero .container {
  display: flex;
}
.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: hsl(0, 0%, 100%);
}
.hero__heading {
  font-size: clamp(35px, calc(2.1875rem + ((1vw - 7.68px) * 13.5542)), 80px);
  font-family: "Kaushan Script", cursive;
  font-weight: 700;
  width: 100%;
  text-align: center;
}
.hero__sub-heading {
    color: hsl(0, 0%, 70%);
  font-size: clamp(20px, calc(1rem + ((1vw - 7.68px) * 1.0361)), 30px);
  text-align: center;
}

.hero__image {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 50%;
  top: 100%;
  margin-top: 40px;
  transform: translateX(50%);
  width: max(40vw, 300px);
}
.hero__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

@media (max-width: 768px) {
  .hero {
    border-radius: 20px;
  }
}
@media (max-width: 425px) {
  .hero__heading,
  .hero__sub-heading {
    text-align: left;
  }
  .hero__image {
    width: 600px;
    right: 0%;
    top: 60%;
  }
}
</style>
