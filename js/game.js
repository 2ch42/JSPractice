const game = document.querySelector("#game");
const ctx = game.getContext("2d");

const GAMETOP = 0;
const GAMEBOTTOM = game.height;
const GAMELEFT = 0;
const GAMERIGHT = game.width;

const STICKWIDTH = 10;
const STICKHEIGHT = 50;

let x1 = GAMELEFT;
let y1 = game.height / 2;
let x2 = GAMERIGHT - STICKWIDTH;
let y2 = game.height / 2;

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    w: false,
    s: false
};

function drawGame() {
        ctx.clearRect(0, 0, game.width, game.height);
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

    moveObjects();
});

function moveObjects() {
    if (keys.w) {
        y1 -= 5;
        if (y1 <= GAMETOP) {
            y1 = GAMETOP;GAMEBOTTOM
        }GAMEBOTTOM
    }
    if (keys.s) {
        y1 += 5;
        if (y1 >= (GAMEBOTTOM - STICKHEIGHT)) {
            y1 = GAMEBOTTOM - STICKHEIGHT;
        }
    }
    if (keys.ArrowUp) {
        y2 -= 5;
        if (y2 <= GAMETOP) {
            y2 = GAMETOP;GAMEBOTTOM
        }GAMEBOTTOM
    }
    if (keys.ArrowDown) {
        y2 += 5;
        if (y2 >= (GAMEBOTTOM - STICKHEIGHT)) {
            y2 = GAMEBOTTOM - STICKHEIGHT;
        }
    }

    drawGame();
}

setInterval(drawGame, 10);
setInterval(moveObjects, 10);

drawGame();
