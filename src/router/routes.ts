import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/dashboard' },
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'dashboard', component: () => import('pages/IndexPage.vue') },
      { path: 'areas', component: () => import('pages/AreaPage.vue') },
      { path: 'places', component: () => import('pages/PlacePage.vue') },
      {
        path: 'places/:placeId/add_room',
        name: 'add_room',
        component: () => import('pages/AddRoomPage.vue'),
        props: true,
      },
      {
        path: 'places/:placeId/rooms',
        name: 'rooms',
        component: () => import('pages/RoomPage.vue'),
        props: true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
