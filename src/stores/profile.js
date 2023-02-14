import { defineStore } from 'pinia'

export default defineStore('profile', {
  state: () => ({
    id: 1,
    username: 'lili.code1',
    status: null,
    avatar: '/avatars/avatar.jpg',
  })
})