const bar = document.querySelector("#bar");
const ctx = bar.getContext("2d");

// const rect = bar.getBoundingClientRect();
// const rectTop = rect.top;
// const rectBot = rect.bottom;

const BARTOP = 0;
const BARBOTTOM = bar.height;

const STICKWIDTH = 10;
const STICKHEIGHT = 50;

let x1 = 100;
let y1 = bar.height / 2;
let x2 = 900;
let y2 = bar.height / 2;

// function resizeCanvas() {
//     bar.height = 1000;
//     bar.scrollHeight = 1000;
// }

function drawBar() {
        ctx.clearRect(0, 0, bar.width, bar.height);
        ctx.fillStyle = "black";
        ctx.fillRect(x1, y1, STICKWIDTH, STICKHEIGHT);
        ctx.fillRect(x2, y2, STICKWIDTH, STICKHEIGHT);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        y1 -= 10;
        if (y1 <= BARTOP)
        {
            y1 = BARTOP;
        }
        drawBar();
    }
    else if (event.key === "ArrowDown") {
        y1 += 10;
        if (y1 >= (BARBOTTOM - STICKHEIGHT))
        {
            y1 = BARBOTTOM - STICKHEIGHT;
        }
        drawBar();
    }
    else if (event.key === "w") {
        y2 -= 10;
        if (y2 <= BARTOP)
        {
            y2 = BARTOP;
        }
        drawBar();
    }
    else if (event.key === "s") {
        y2 += 10;
        if (y2 >= (BARBOTTOM - STICKHEIGHT))
        {
            y2 = BARBOTTOM - STICKHEIGHT;
        }
        drawBar();
    }
});

window.addEventListener("resize", function () {
    // resizeCanvas();
    drawBar();
});

// resizeCanvas();

drawBar();
