<template>
  <q-page padding>
    <area-component></area-component>
  </q-page>
</template>

<script>
import AreaComponent from 'components/AreaComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { AreaComponent },
  setup() {
    return {};
  },
});
</script>
