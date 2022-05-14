<template>
  <q-page class="row items-center justify-evenly">
    <dashboard-component></dashboard-component>
  </q-page>
</template>

<script lang="ts">
import DashboardComponent from 'components/DashboardComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { DashboardComponent },
  setup() {
    return {};
  },
});
</script>
