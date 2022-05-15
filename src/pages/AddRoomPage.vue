<template>
  <q-page padding class="row items-center justify-evenly">
    <h1>Add Room for place {{ placeId }}</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddRoomPage',
  props: ['placeId'],
  setup() {
    return {};
  },
});
</script>
