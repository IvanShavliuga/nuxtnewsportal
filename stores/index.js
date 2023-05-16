import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useNewsStore = defineStore('news', {
  state: () => ({
    posts: [
        {
          id: 0,
          userId: 0,
          groupId: 0,
          date: "12.08.2019",
          time: "9:00",
          title: "I am learn vue.js",
          desc: "Vue.js is modern framework. This modern framework comes from China and is already gaining popularity. It is easy to learn and suitable for beginners.",
          like: [
            1,
            2,
            3
          ],
          repost: [
            1,
            2,
            3
          ],
          comments: [],
          views: [
            1,
            2,
            3
          ],
          cat: [
            "Study",
            "Vue.js",
            "Frontend"
          ],
          type: "post",
          likeclick: false
        } 
    ],
  }),
  getters: {
    getPosts(state) { return state.posts},
  },
  
})