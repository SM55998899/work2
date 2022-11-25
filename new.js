
window.addEventListener('DOMContentLoaded',function(){
    /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
    // ハンバーガーメニューをクリックした時
    $('.hamburger').on('click', function() {
      // ハンバーガーメニューの共通処理を呼び出す
      hamburger();
    });
    // メニューのリンクをクリックした時
    $('#navi a').on('click', function() {
      // ハンバーガーメニューの共通処理を呼び出す
      hamburger();
    });
});

function hamburger() {
    // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
    // 存在しない場合を追加する処理を自動で行ってくれる
    $('.hamburger').toggleClass('active');
  
    if ($('.hamburger').hasClass('active')) {
      // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
      $('.ac-menu .menu').addClass('active');
    } else {
      // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
      $('.ac-menu .menu').removeClass('active');
    }
  }

 window.addEventListener('DOMContentLoaded',function(){
    $(".hamburger").click(function() {
        $(".ac-menu .menu").slideToggle("");
    });
});