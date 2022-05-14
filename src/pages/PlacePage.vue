<template>
  <q-page padding class="row items-center justify-evenly">
    <place-component></place-component>
  </q-page>
</template>

<script lang="ts">
import PlaceComponent from 'components/PlaceComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlacePage',
  components: { PlaceComponent },
  setup() {
    return {};
  },
});
</script>
