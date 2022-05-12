<template>
  <div>
    <b-form class="filters-form" inline>
      <b-form-row>
        <b-input-group class="d-flex flex-column align-items-start col">
          <label for="input-search">Search</label>
          <b-form-input aria-label="input-search"></b-form-input>
        </b-input-group>

        <b-input-group class="d-flex flex-column align-items-start col">
          <label for="input-category">Product category</label>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-input-group>

        <b-input-group class="d-flex flex-column align-items-start col">
          <label for="input-sale">Sale</label>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-input-group>

        <b-button class="col" type="submit" variant="primary">Apply</b-button>
    </b-form-row>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/style.scss";

.filters-form {
  .form-row {
    align-items: flex-end;
  }

  .input-group,
  .custom-select {
    font-family: inherit;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0;
    font-weight: 500;
    text-align: left;
  }

  label {
    padding-bottom: 20px;
  }

  .custom-select,
  .form-control {
    width: 100%;
    height: auto;
    padding: 20px;
    padding-right: 26px;
    box-sizing: border-box;
    border: none;
    border-radius: 0;
    background: $color-white-smoke;
    color: $color-black;
    cursor: pointer;
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
