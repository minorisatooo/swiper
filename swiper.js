/** Vue アプリケーションの生成 **/
function createApp() {
  // swiperをインストール
  Vue.use(VueAwesomeSwiper)

  new Vue({
    el: "#app",
    data:{
      //Swiperの設定
      swiperOption:{
        //ページ送りボタンの設定
        navigation:{
          //次に進むボタンの設定
          nextEl:".swiper-button-next",
          //前に戻るボタンの設定
          prevEl:".swiper-button-prev"
        },
        pagination:{
          //ページネーションの設定
          el:".swiper-pagination"
        }
      }
    }
  })
}

/** 初期化 **/
function initialize() {
  createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))
