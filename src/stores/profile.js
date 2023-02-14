import { defineStore } from 'pinia'

export default defineStore('profile', {
  state: () => ({
    id: 1,
    username: 'lili.code1',
    status: 'active',
    avatar: '/avatars/avatar.jpg',
  })
})