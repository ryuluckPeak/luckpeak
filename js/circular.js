function positionMenu() {

  const circle = document.querySelector('.circle');
  const items = document.querySelectorAll('.circle a');

  const circleSize = circle.offsetWidth;

  // 半径を自動計算
  const radius = circleSize / 2.5;

  const length = items.length;

  items.forEach((item, i) => {

    const angle = -0.5 * Math.PI + (2 * Math.PI * i / length);

    item.style.left =
      (50 + radius * Math.cos(angle) / circleSize * 100) + "%";

    item.style.top =
      (50 + radius * Math.sin(angle) / circleSize * 100) + "%";
  });
}

/* 初期配置 */
positionMenu();

/* 画面サイズ変わったら再計算（超重要） */
window.addEventListener("resize", positionMenu);


/* 開閉ボタン */
document.querySelector('.menu-button').onclick = function(e){
  e.preventDefault();
  document.querySelector('.circle').classList.toggle('open');
};



