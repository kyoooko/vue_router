// 1:テンプレートを代入した用意
const Top = { template: '<div>Top</div>'}
// ③URLパラメーターを利用する
const User = { template: '<div>User {{ $route.params.userID }}</div>'}
//2： Routerのインスタンス作成
const router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: Top
    },
    {
      // ①URLパラメーターを利用する
      path: '/users/:userID',
      // ❶名前付きのルート
      name: 'user',
      component: User
    }
  ]
})

// 3：Vueのインスタンスを作成
const app = new Vue({
  // 4：RouterのインスタンスをVueのインスタンスに渡す（省略形はrouterのみでOK）
  // router: router
  router
  // 5：マウントする
}).$mount('#app')


// Vueインスタンス
// var app = new Vue({ 
//   // #appの部分が対象
//   el: '#app',
//   data:{

// })