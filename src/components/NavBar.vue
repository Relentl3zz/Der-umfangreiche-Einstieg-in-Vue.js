<template>
  <div class="nav-bar">
    <router-link :to="{ name: 'Home' }">
      <img src="@/assets/logo.png" alt="" />
    </router-link>

    <router-link :to="{ name: 'Login-Page' }">
      <h2>Login</h2>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-bar {
  display: flex;
  justify-content: space-around;
  background-color: gray;
}
.nav-bar img {
  width: 64px;
  height: 64px;
}
</style>
