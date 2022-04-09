<template>
  <q-page class="row items-center justify-evenly">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="result && result.areas">
      <ul>
        <li v-for="area in result.areas" :key="area.id">
          {{ area.name }} [ {{ area.shortName }}]: {{ area.description }}
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default defineComponent({
  name: 'ExampleComponent',
  props: {},
  setup() {
    const { result, loading, error } = useQuery(gql`
      {
        areas {
          id
          description
          name
          shortName
        }
      }
    `);

    return { /* your other items, */ result, loading, error };
  },
});
</script>
