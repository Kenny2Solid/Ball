const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let dy = 1;
let dx = 1;
let x = 100;
let y = 100;
const ballSize = 50;

function animateBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, ballSize, ballSize);

    // Update ball position
    x += dx;
    y += dy;

    // Check for collision with canvas boundaries and reverse direction if necessary
    if (x + ballSize > canvas.width || x < 0) {
        dx *= -1;
    }
    if (y + ballSize > canvas.height || y < 0) {
        dy *= -1;
    }

    requestAnimationFrame(animateBall);
}

animateBall();