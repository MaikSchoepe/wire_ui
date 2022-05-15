<template>
  <q-page class="q-pa-md row items-stretch">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="result && result.places">
      <q-table
        title="Räume"
        :rows="result.places"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :loading="loading"
        :filter="filter"
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              dense
              round
              flat
              :to="{
                name: 'add_room',
                params: { placeId: props.row.id },
              }"
              icon="add"
            ></q-btn>
            <q-btn
              dense
              round
              flat
              :to="{ name: 'rooms', params: { placeId: props.row.id } }"
              icon="space_dashboard"
            ></q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { QTableProps } from 'quasar';

const columns: QTableProps['columns'] = [
  {
    name: 'areaName',
    label: 'Bereich',
    field: (row: any) => row.parentArea.shortName,
    sortable: true,
    align: 'left',
  },
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
  { name: 'actions', label: '', field: '', align: 'center' },
];

export default defineComponent({
  name: 'PlaceComponent',
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
        places {
          id
          name
          shortName
          description
          parentArea {
            shortName
          }
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
