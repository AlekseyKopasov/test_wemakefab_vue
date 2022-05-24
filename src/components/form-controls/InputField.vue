<template>
  <b-input-group class="input-field">
    <h3 class="input-field__label">{{ title }}</h3>
    <b-form-input
      class="input-field__input"
      :type="inputType"
      :placeholder="placeholder"
      :aria-label="ariaLabel">
    </b-form-input>
    <span>Icon</span>
  </b-input-group>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    title: {
      type: String,
    },
    inputType: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    ariaLabel: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global/variables.scss";

.input-field {
  font-family: inherit;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0;
  font-weight: 500;
  text-align: left;
}
</style>
