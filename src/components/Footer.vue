<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col>
          <router-link to="/">
            <Logo :mod="mod" />
          </router-link>
        </b-col>
        <b-col
          class="d-flex justify-content-end"
          cols="8">
          <router-link class="link link--white active" to="/" >Copyright</router-link>
          <router-link class="link link--white active" to="/" >Contacts</router-link>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  components: { Logo },
  data: () => ({
    mod: 'white',
  }),
};
</script>

<style lang="scss" scoped>
@import '../../src/assets/styles/global/variables.scss';

.footer {
  margin-top: auto;
  padding: 30px 0;
  background-color: $color-nero;

  .link {
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
