import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    data: {},
    token: null,
  }),
})