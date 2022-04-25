<template>
  <div id="app">
    <b-container>
      <Header />
      <router-view/>
    </b-container>
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Header, Footer },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
