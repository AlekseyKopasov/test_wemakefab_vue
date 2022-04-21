<template>
  <b-container id="app">
    <Header />

    <router-view/>

    <Footer/>
  </b-container>
</template>

<script>

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: { Header, Footer }
}
</script>
