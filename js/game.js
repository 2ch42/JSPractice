const game = document.querySelector("#game");
const ctx = game.getContext("2d");

const BORDERWIDTH = 10;

const GAMETOP = 0;
const GAMEBOTTOM = game.height;
const GAMELEFT = 0;
const GAMERIGHT = game.width;

const STICKWIDTH = 10;
const STICKHEIGHT = 80;

const BALLRADIUS = 13;

// stick coordinate
let x1 = GAMELEFT;
let y1 = game.height / 2 - STICKHEIGHT / 2;
let x2 = GAMERIGHT - STICKWIDTH;
let y2 = game.height / 2 - STICKHEIGHT / 2;

// ball coordinate
let ballX = GAMERIGHT / 2;
let ballY = GAMEBOTTOM / 2;

speedX = parseFloat(Math.random() + 2);
speedY = parseFloat(Math.random() + 2);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    w: false,
    s: false
};

function drawGame() {
    ctx.clearRect(0, 0, game.width, game.height); // center line
    ctx.fillStyle = "black";
    ctx.fillRect(GAMERIGHT / 2, 0, 5, GAMEBOTTOM);
    ctx.fillRect(x1, y1, STICKWIDTH, STICKHEIGHT); // stick1
    ctx.fillRect(x2, y2, STICKWIDTH, STICKHEIGHT); // stick2
    drawBall();
}

function drawBall()
{
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "orange";
    ctx.arc(ballX, ballY, BALLRADIUS, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}

function moveBall() {
    ballX += speedX;
    ballY += speedY;
    if (ballX < (x1 + BALLRADIUS + STICKWIDTH)) // left wall or stick
    {
        if ((ballY > (y1 - BALLRADIUS)) && (ballY < (y1 + STICKHEIGHT + BALLRADIUS))) {
            speedX *= -1;
            return ;
        }
        scoreRight++;
        ballX = GAMERIGHT / 2;
        ballY = GAMEBOTTOM / 2;
        speedX = parseFloat(Math.random() + 2) * -1;
        speedY = parseFloat(Math.random() + 2) * -1;
    }
    else if (ballX > (x2 - BALLRADIUS)) // right wall or stick 
    {
        if ((ballY >= (y2 - BALLRADIUS)) && (ballY <= (y2 + STICKHEIGHT + BALLRADIUS)))
        {
             speedX *= -1;
             return ;
        }
        scoreLeft++;
        ballX = GAMERIGHT / 2;
        ballY = GAMEBOTTOM / 2;
        speedX = parseFloat(Math.random() + 2);
        speedY = parseFloat(Math.random() + 2);
    }
    else if (ballY <= BALLRADIUS) // top wall
    {
        speedY *= -1;
    }
    else if (ballY >= GAMEBOTTOM - BALLRADIUS) // bottom wall
    {
        speedY *= -1;
    }
}

document.addEventListener("keydown", function(event) {
    // 해당 키의 상태를 true로 설정
    keys[event.key] = true;

    // 모든 키의 상태를 확인하여 물체의 움직임 조절
    moveSticks();
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

    moveSticks();
});

function moveSticks() {
    if (keys.w) {
        y1 -= 5;
        if (y1 <= GAMETOP) {
            y1 = GAMETOP;
        }
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
            y2 = GAMETOP;
        }
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
setInterval(moveSticks, 10);
setInterval(moveBall, 10);

drawGame();
