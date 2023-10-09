//! vue 2
// const vm = new Vue({
//   el: "#app",
//   data: {},
//   methods: {},
// });

//!  Vue-3

 Vue.createApp({
   data() {
     return {
       text: "Счётчик",
       count: 0,
     };
   },
   methods: {},
 }).mount("#app");


// const EventHandlingApp = {
//   data() {
//     return {
//       message: 'Hello Vue.js!'
//     }
//   },
//   methods: {
//     reverseMessage() {
//       this.message = this.message
//         .split('')
//         .reverse()
//         .join('')
//     }
//   }
// }

// Vue.createApp(EventHandlingApp).mount('#event-handling')
 