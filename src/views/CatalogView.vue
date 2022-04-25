<template>
  <div>
    <Filters />
    <div>Catalog</div>
  </div>
</template>

<script>

import Filters from '@/components/Filters.vue';

export default {
  name: 'CatalogView',
  components: { Filters },
};
</script>
