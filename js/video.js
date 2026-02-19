
const videos = [
    "video/202502_01.mp4",
    "video/202502_02.mp4",
    "video/202502_03.mp4",
    "video/202502_04.mp4",
    "video/202502_05.mp4",
    "video/202502_06.mp4",
    "video/202502_07.mp4",
    "video/202502_08.mp4",
    "video/202502_09.mp4",
    "video/202502_10.mp4",
    "video/202502_11.mp4",
    "video/202502_12.mp4",
];

let currentVideo = 0;
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");
const textLeft = document.getElementById("textLeft");
const textRight = document.getElementById("textRight");
const textCenter = document.getElementById("textCenter");

function updateTextPosition(videoIndex) {
    if (videoIndex < 6) {
        // 1～6の動画では両側に文字を表示
        textLeft.style.display = "block";
        textRight.style.display = "block";
        textCenter.style.display = "none";
    } else {
        // 7～12の動画では中央に文字を表示
        textLeft.style.display = "none";
        textRight.style.display = "none";
        textCenter.style.display = "block";
    }
}

// 動画終了時に次の動画を再生
videoPlayer.addEventListener("ended", function() {
    currentVideo++;
    if (currentVideo >= videos.length) {
        currentVideo = 0;
    }
    videoSource.src = videos[currentVideo];
    videoPlayer.load();
    videoPlayer.play();
    updateTextPosition(currentVideo);
});

// 初期設定
videoSource.src = videos[currentVideo];
videoPlayer.load();
videoPlayer.play();
updateTextPosition(currentVideo);

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
