<script setup lang="ts">
import Logo from "../icons/logo.vue";
</script>
<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <Logo class="header__logo" />
        </div>
        <nav class="header__nav">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 0 1 0-1.99h8.01c.55 0 .995.445.995.995M22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 1 1 0-1.99h18.01c.55 0 .995.446.995.995m-.995-5.01a.995.995 0 0 0 0-1.99H8.995a.995.995 0 1 0 0 1.99z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;
  z-index: 100;
  padding: 10px 20px;
  border-radius: 19px;
  background-color: rgb(255 255 255 / 0%);
  backdrop-filter: blur(10px);
}
.header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header__logo {
  width: 100px;
}

.header__nav button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
}
</style>
