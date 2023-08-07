<template>
  <header class="header">
    <router-link class="header__logo" to="/">
      <img class="header__img" src="../assets/img/logo.png" alt="">
    </router-link>
    <router-link class="header__link" to="/catalog">Каталог</router-link>
  </header>
  <main class="main">картинка</main>
  <footer class="footer">Футер</footer>
</template>

<script>
export default {

}
</script>

<style>
.header{
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
</style>