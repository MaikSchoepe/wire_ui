<template>
  <q-page padding class="row items-center justify-evenly">
    <h1>Rooms of place {{ placeId }}</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RoomPage',
  props: ['placeId'],
  setup() {
    return {};
  },
});
</script>
