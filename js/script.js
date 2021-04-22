$(function() {

  // View moreボタン
  var hideList = '.w-item:nth-of-type(n+7)';
  $(hideList).hide();
  $('.viewmore').click(function() {
    $(hideList).toggle();
    if ($(hideList).css('display') == 'none') {
      $('.viewmore').text('view more');
    } else {
      $('.viewmore').text('close');
    }
    return false;
  });
  // var num = $('.w-item').length;
  // if (num < 6) {
  //   $('.open-btn').hide();
  // };


  // ハンバーガーメニュー
  $('.burger-btn').click(function() {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('.hamburger-menu').addClass('active');
    } else {
      $('.hamburger-menu').removeClass('active');
    }
  });
  $('.hamburger-menu a').click(function() {
    $('.burger-btn').trigger('click');
  });

  // Aboutのフェードイン

  //画面をスクロールするとイベントが発動する
  $(window).scroll(function() {
    
    //フェードインさせたい要素の位置をずらす
    $('.fadein').css({
      'opacity': '0',
      'transform': 'translateY(30px)'
    });
    
    //スクロールバーの位置を取得
    var scroll = $(window).scrollTop();

    //ウィンドウの高さを取得
    var windowHeight = $(window).height();

    $('.fadein').each(function() {
      //フェードインさせたい要素の縦位置を取得
      var elemPos = $(this).offset().top;

      //要素がウィンドウの中に入ってからさらに100pxスクロールしたら要素をフェードインする
      if (scroll > elemPos - windowHeight + 100) {
        $(this).css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }
    });
  });

  
});