<template>
  <HeadHeader></HeadHeader>
  <div class="main">
    <SearchBar></SearchBar>
    <CopyButton></CopyButton>
  </div>
  <FootFooter></FootFooter>
</template>

<script setup>
import FootFooter from './components/Foot-footer.vue';
import SearchBar from './components/Search-bar.vue';
import HeadHeader from './components/Head-header.vue';
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
.main {
  width: 50vw;
  margin: auto;
  height: 50vh;
  text-align: center;
}
</style>
