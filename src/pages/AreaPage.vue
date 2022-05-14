<template>
  <q-page padding class="row items-center justify-evenly">
    <area-component></area-component>
  </q-page>
</template>

<script lang="ts">
import AreaComponent from 'components/AreaComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AreaPage',
  components: { AreaComponent },
  setup() {
    return {};
  },
});
</script>
