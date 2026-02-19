const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let width, height, dpr;
let currentFocus;

const RADIUS = 8;
const TAIL_LENGTH = 10;

const head = {};
const tail = [];

document.body.addEventListener('focus', event => focus(event.target), true);

function resize() {
  dpr = window.devicePixelRatio || 1;

  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  context.scale(dpr, dpr);
}

function redraw() {
  paint();
  requestAnimationFrame(redraw);
}

function paint() {
  context.clearRect(0, 0, width, height);

  if (currentFocus) {
    // Add to the tail
    tail.push({ ...head });
    if (tail.length > TAIL_LENGTH) tail.shift();

    // Paint the tail
    if (tail.length > 3) {
      context.beginPath();
      context.moveTo(tail[0].x, tail[0].y);

      for (var i = 2; i < tail.length - 2; i++) {
        const p1 = tail[i];
        const p2 = tail[i + 1];

        context.quadraticCurveTo(p1.x, p1.y, (p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
      }

      context.quadraticCurveTo(tail[i].x, tail[i].y, tail[i + 1].x, tail[i + 1].y);
      context.lineWidth = RADIUS;
      context.lineCap = 'round';
      context.strokeStyle = '#2c8660';
      context.stroke();
    }

    // Animate the head towards target x/y with faster speed
    head.x += (head.tx - head.x) * 0.4;
    head.y += (head.ty - head.y) * 0.4;

    head.vx *= 0.8;
    head.x += head.vx;

    context.beginPath();
    context.arc(head.x, head.y, RADIUS, 0, Math.PI * 2);
    context.fillStyle = '#40cb90';
    context.fill();
  }
}

function focus(element) {
  const previousFocus = currentFocus;

  if (element) currentFocus = element;

  if (!currentFocus) return;

  // 目標位置をスクロール位置も考慮して計算
  const rect = currentFocus.getBoundingClientRect();
  head.tx = rect.left + window.scrollX - RADIUS; // スクロール位置を加味
  head.ty = rect.top + window.scrollY + currentFocus.offsetHeight / 2; // スクロール位置を加味

  // デバッグ - ターゲット位置を確認
  console.log('Focus element:', currentFocus);
  console.log('head.tx:', head.tx, 'head.ty:', head.ty);

  if (typeof head.x !== 'number') {
    head.x = head.tx;
    head.y = head.ty;
  }

  // フォーカスが変わった場合、スムーズに移動
  if (currentFocus !== previousFocus) {
    head.vx = -8 - Math.abs(head.tx - head.x) / 5;
  }
}

// Resize and redraw on resize event
resize();
redraw();

window.addEventListener('resize', () => {
  requestAnimationFrame(() => {
    resize();
    focus(currentFocus); // フォーカスを強制更新
    paint();
  });
});

window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    focus(currentFocus); // スクロール時にフォーカスを強制更新
    paint();
  });
});

// フォーム送信処理
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // デフォルトの送信動作を防ぐ

  // フォームデータを取得
  const formData = new FormData(e.target);
  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    params.append(key, value);
  });

  // 確認ページに遷移
  window.location.href = `confirm.html?${params.toString()}`;
});


