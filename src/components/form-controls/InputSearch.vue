<template>
  <b-input-group class="input-field">
    <h3 class="input-field__label">{{ title }}</h3>
    <b-form-input
      class="input-field__input"
      type="search"
      :placeholder="placeholder"
      :aria-label="ariaLabel"
      v-model:text="text">
    </b-form-input>
      <span
        class="input-field__icon"
        @click="clearInput">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path d="m1 1 5 5m5 5L6 6m0 0 5-5L1 11" stroke="currentColor"/></svg>
      </span>
  </b-input-group>
</template>

<script>
export default {
  name: 'InputField',
  props: ['title', 'inputType', 'placeholder', 'ariaLabel'],
  data: () => ({
    text: '',
  }),
  methods: {
    clearInput() {
      this.text = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global/variables.scss";

.input-group > .form-control {
  width: auto;
}

.input-field {
  display: flex;
  flex-direction: column;
  width: 100%;

  font-family: inherit;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0;
  font-weight: 500;
  text-align: left;

  &__label,
  &__input {
    margin: 0;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0;
    font-weight: 500;
  }

  &__label {
    margin-bottom: 20px;
  }

  &__input {
    width: 100%;
    height: auto;
    padding: 20px 35px 20px 20px;
    background-color: $color-white-smoke;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;

    &:focus + .input-field__icon {
      opacity: 1;
    }

    &:hover,
    &:focus,
    &:focus-visible {
      outline: none;
      border: 1px solid $color-black;
      box-shadow: none;
    }
  }

  &__input::-webkit-search-cancel-button {
    -webkit-appearance: none;
    display: none;
  }

  &__icon {
    position: absolute;
    bottom: 50%;
    right: 20px;
    margin-bottom: -20px;
    width: 12px;
    height: 12px;
    z-index: 3;
    opacity: 0;
  }

  &__icon svg {}
}
</style>
