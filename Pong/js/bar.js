const bar = document.querySelector("#bar");
const ctx = bar.getContext("2d");

let x = 20;
let y = bar.offsetTop + bar.offsetHeight / 2;

function resizeCanvas() {
    bar.height = 1000;
    bar.scrollHeight = 1000;
}

function drawBar() {
        ctx.clearRect(0, 0, bar.width, bar.height);
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, 10, 50);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        y -= 10;
        if (y <= bar.offsetTop)
        {
            y = bar.offsetTop;
        }
        drawBar();
    } else if (event.key === "ArrowDown") {
        y += 10;
        if (y >= (bar.offsetTop + bar.offsetWidth))
        {
            y = bar.offsetTop + bar.offsetWidth;
        }
        drawBar();
    }
});

window.addEventListener("resize", function () {
    resizeCanvas();
    drawBar();
});

resizeCanvas();

drawBar();
