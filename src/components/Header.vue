<template>
  <header>
    <b-row>
      <b-col>
        <router-link to="/">
          <Logo />
        </router-link>
      </b-col>
      <b-col>
        <router-link to="/" class="active">Catalog</router-link>
      </b-col>
      <b-col></b-col>
      <b-col>
        <router-link to="/profile">Profile</router-link>
        <button>Basket(3)</button>
      </b-col>
    </b-row>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  components: { Logo },
};
</script>

<style scoped>

</style>
