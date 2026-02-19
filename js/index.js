$(function(){
    $(".slideshow-fade li").css({
        "position": "relative",
        "overflow": "hidden",
        "width": "100%",
        "height": "100%"
    });
    $(".slideshow-fade li").hide().css({"position":"absolute","top":0,"left":0});
    $(".slideshow-fade li:first").addClass("fade").show();

    setInterval(function(){
        var $active = $(".slideshow-fade li.fade");
        var $next = $active.next("li").length ? $active.next("li") : $(".slideshow-fade li:first");
        $active.fadeOut(1000).removeClass("fade");
        $next.fadeIn(1000).addClass("fade");
    }, 2000); // スライド切り替え時間を2秒に設定
});

window.onload = function () {
    var nav = document.getElementById('nav-wrapper');
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
    blackBg.addEventListener('click', function () {
        nav.classList.remove('open');
    });
};  

$(function() {
    var $slides = $(".slideshow-zoom li"); // すべてのスライド
    var totalSlides = $slides.length; // 総スライド数
    var currentIndex = 0; // 最初の画像インデックス

    // 初期表示：最初の画像にズームを適用
    $slides.hide().eq(currentIndex).show().addClass("zoom");

    // スライド切り替え
    setInterval(function() {
        var $active = $slides.eq(currentIndex); // 現在のスライド
        var $nextIndex = (currentIndex + 1) % totalSlides; // 次のスライドインデックス
        var $next = $slides.eq($nextIndex); // 次のスライド

        // 現在のスライドからズームを削除し、非表示
        $active.removeClass("zoom").hide();

        // 次のスライドにズームを適用して表示
        $next.addClass("zoom").show();

        // 現在のインデックスを更新
        currentIndex = $nextIndex;

    }, 5000); // 4秒ごとに画像を切り替え
});
