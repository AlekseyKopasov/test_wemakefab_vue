<template>
  <div>
    <b-form class="filters-form" inline>
      <b-form-row>
        <InputField :aria-label="Search-input" />

        <b-input-group class="d-flex flex-column align-items-start col">
          <span class="filters-form__label">Product category</span>
          <b-dropdown class="filters-form__input" id="dropdown-1" text="Sneakers">
            <b-dropdown-item>Sneakers</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
        </b-input-group>

        <b-input-group class="d-flex flex-column align-items-start col">
          <label class="filters-form__label">Sale</label>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-input-group>

        <b-input-group class="d-flex flex-column align-items-start col">
          <b-button class="col" type="submit" variant="primary">Apply</b-button>
        </b-input-group>
    </b-form-row>
    </b-form>
  </div>
</template>

<script>
import InputField from '@/components/form-controls/InputField';

export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    };
  },
  components: { InputField },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";

.filters-form {
  .form-row {
    align-items: flex-end;
  }

  .input-group,
  &__input,
  .dropdown-toggle {
    font-family: inherit;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0;
    font-weight: 500;
    text-align: left;
  }

  &__label {
    padding-bottom: 20px;
  }

  &__input > .btn,
  .form-control {
    width: 100%;
    height: auto;
    padding: 20px;
    padding-right: 26px;
    box-sizing: border-box;
    border: none;
    border-radius: 0;
    background-color: $color-white-smoke;
    color: $color-black;
    cursor: pointer;
  }

  .custom-select {
    //background:
    //  $color-white-smoke
    //  url("../assets/images/icons/icon-arrow-down.svg")
    //  no-repeat;
    //background-size: 14px 7px;
    //background-position: 94% 50%;

    &:focus {
      transform: rotate(180deg);
    }
  }

  button[type="submit"] {
    padding: 20px;
    border: none;
    border-radius: 0;

    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0;
    font-weight: 500;
    background-color: $color-nero;
    color: $color-white;
  }
}
</style>
