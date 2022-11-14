<template>
  <h1>Link Shortener</h1>
  <div class="main">
    <SearchBar></SearchBar>
  </div>
</template>

<script setup>
import SearchBar from './components/Search-bar.vue';
import CopyButton from './components/Copy-button.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Bebas Neue', cursive;
  background-color: aliceblue;
}
h1 {
  text-align: center;
  margin: 3rem;
  color: cornflowerblue;
  font-size: 40px;
}
.main {
  width: 50vw;
  margin: auto;
  height: 50vh;
  text-align: center;
}
</style>
