<template>
  <header class="header">
    <b-row>
      <b-col cols="2">
        <router-link to="/">
          <Logo />
        </router-link>
      </b-col>
      <b-col cols="2">
        <router-link class="link active" to="/" >Catalog</router-link>
      </b-col>
      <b-col
        class="d-flex justify-content-end"
        cols="8">
        <router-link class="link" to="/profile">Profile</router-link>
        <b-button
          class="link"
          variant="link">Basket
            <span>({{ basketCount }})</span>
        </b-button>
      </b-col>
    </b-row>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  components: { Logo },
  data: () => ({
    basketCount: 3,
  }),
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 60px;
  padding: 30px 0;
  border-bottom: 1px solid #BDBDBD; // TODO dev only
}
</style>
