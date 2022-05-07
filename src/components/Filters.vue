<template>
  <div>
    <p>search</p>
    <p>Product category select</p>
    <p>Sale select</p>
    <p>Apply Button submit</p>

    <b-form inline>
      <label class="mr-sm-2" for="input-search">Search</label>
      <b-form-input aria-label="input-search"></b-form-input>

      <label class="mr-sm-2" for="input-category">Product category</label>
      <b-form-select v-model="selected" :options="options"></b-form-select>

      <label class="mr-sm-2" for="input-sale">Product category</label>
      <b-form-select v-model="selected" :options="options"></b-form-select>

      <b-button type="submit" variant="primary">Apply</b-button>
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
