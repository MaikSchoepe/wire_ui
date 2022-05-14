<template>
  <q-page class="q-pa-md row items-stretch">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="result && result.areas">
      <q-table
        title="Bereiche"
        :rows="result.areas"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :loading="loading"
        :filter="filter"
      ></q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { QTableProps } from 'quasar';

const columns: QTableProps['columns'] = [
  { name: 'id', label: 'ID', field: 'id', sortable: true, align: 'left' },
  {
    name: 'shortName',
    label: 'Kurzname',
    field: 'shortName',
    sortable: true,
    align: 'left',
  },
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'description',
    label: 'Beschreibung',
    field: 'description',
    sortable: true,
    align: 'left',
  },
];

export default defineComponent({
  name: 'AreaComponent',
  setup() {
    const filter: any = ref('');
    const pagination = ref({
      sortBy: 'id',
      descending: false,
      page: 1,
      rowsPerPage: 10,
    });

    const { result, loading, error } = useQuery(gql`
      {
        areas {
          id
          name
          shortName
          description
        }
      }
    `);

    return {
      filter,
      loading,
      pagination,
      columns,
      result,
      error,
    };
  },
});
</script>
