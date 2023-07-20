import {defineStore} from 'pinia';
interface Data {
  name: string,
  surname: string,
  email: string,
  //...
}
export const useUserStore = defineStore('user', {
  state: () => ({
    data: {} as Data,
    token: '123' as string | null,
  }),
})