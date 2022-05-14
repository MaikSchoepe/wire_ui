<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Wire Manager </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="foundation" />
          </q-item-section>

          <q-item-section>Bereiche</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="room" />
          </q-item-section>

          <q-item-section>Räume</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      miniState: ref(true),
    };
  },
});
</script>
