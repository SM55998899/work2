window.addEventListener('DOMContentLoaded', function () {
    /*=================================================
    // カルーセル用 jQueryプラグイン「slick」
    // マニュアル：https://kenwheeler.github.io/slick/
    ===================================================*/
    $('#slider').slick({
      fade:true,
        autoplay: true,                         // 自動再生オン
        autoplaySpeed: 5000,                    // スライドを3秒で切り替え
        // 左右の矢印を表示
        dots: true,                             // ドット（ページ送り）を表示
        slidesToShow: 1,                        // スライドを1枚表示（※centerModeをtrueにすると両端に2枚見切れた状態になる）
        centerMode: true,                       // センターモード（両端が見切れた状態になる）
        centerPadding: '0%',                   // 見切れたコンテンツの幅を18%に設定
        prevArrow: '<div class="prev"></div>',   // 前へ矢印のHTMLを変更する
        nextArrow: '<div class="next"></div>',   // 次へ矢印のHTMLを変更する
        responsive: [              // レスポンシブの設定
            {
                breakpoint: 900,       // 900px以下の場合に適用
                settings: {
                    centerMode: false    // センターモードをオフにする
                }
            }
        ]
    });
});

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

window.addEventListener('DOMContentLoaded',function(){
  $('#js-slider8').slick({
    arrows: false, // 前・次のボタンを表示しない
    dots: false, // ドットナビゲーションを表示しない
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000, // スライドさせるスピード（ミリ秒）
    cssEase: 'linear',
    slidesToShow: 1, // 表示させるスライド数
    variableWidth: true, // スライド幅の自動計算を無効化
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
  });
});