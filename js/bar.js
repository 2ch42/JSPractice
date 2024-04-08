const bar = document.querySelector("#bar");
const ctx = bar.getContext("2d");

const BARTOP = 0;
const BARBOTTOM = bar.height;
const BARLEFT = 0;
const BARRIGHT = bar.width;

const STICKWIDTH = 10;
const STICKHEIGHT = 50;

let x1 = BARLEFT;
let y1 = bar.height / 2;
let x2 = BARRIGHT - STICKWIDTH;
let y2 = bar.height / 2;

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    w: false,
    s: false
};

function drawBar() {
        ctx.clearRect(0, 0, bar.width, bar.height);
        ctx.fillStyle = "black";
        ctx.fillRect(x1, y1, STICKWIDTH, STICKHEIGHT);
        ctx.fillRect(x2, y2, STICKWIDTH, STICKHEIGHT);
}

document.addEventListener("keydown", function(event) {
    // 해당 키의 상태를 true로 설정
    keys[event.key] = true;

    // 모든 키의 상태를 확인하여 물체의 움직임 조절
    moveObjects();
});

document.addEventListener("keyup", function(event) {
    // 해당 키의 상태를 false로 설정
    // keys[event.key] = false;
    if (event.key === "w") {
        keys[event.key] = false;
    }
    if (event.key === "s") {
        keys[event.key] = false;
    }
    if (event.key === "ArrowUp") {
        keys[event.key] = false;
    }
    if (event.key === "ArrowDown") {
        keys[event.key] = false;
    }

    // 모든 키의 상태를 확인하여 물체의 움직임 조절
    moveObjects();
});

function moveObjects() {
    // ArrowUp 또는 w 키가 눌려있을 때
    if (keys.w) {
        y1 -= 5;
        if (y1 <= BARTOP) {
            y1 = BARTOP;
        }
    }
    // ArrowDown 또는 s 키가 눌려있을 때
    if (keys.s) {
        y1 += 5;
        if (y1 >= (BARBOTTOM - STICKHEIGHT)) {
            y1 = BARBOTTOM - STICKHEIGHT;
        }
    }
    // ArrowUp 또는 w 키가 눌려있을 때
    if (keys.ArrowUp) {
        y2 -= 5;
        if (y2 <= BARTOP) {
            y2 = BARTOP;
        }
    }
    // ArrowDown 또는 s 키가 눌려있을 때
    if (keys.ArrowDown) {
        y2 += 5;
        if (y2 >= (BARBOTTOM - STICKHEIGHT)) {
            y2 = BARBOTTOM - STICKHEIGHT;
        }
    }

    drawBar();
}

setInterval(drawBar, 10);
setInterval(moveObjects, 10);

drawBar();
