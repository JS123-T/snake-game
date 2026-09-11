const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const scoreElement = document.getElementById('score');

const gridSize = 20;
const tileCount = canvas.width / gridSize;
let snake = [{ x: 10, y: 10 }];
let food = createFood();
let direction = { x: 1, y: 0 };
let nextDirection = { x: 1, y: 0 };
let score = 0;
let gameOver = false;

function createFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
    } while (snake.some((part) => part.x === newFood.x && part.y === newFood.y));
    return newFood;
}

function draw() {
    context.fillStyle = '#1e293b';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#f43f5e';
    context.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);

    snake.forEach((part, index) => {
        context.fillStyle = index === 0 ? '#4ade80' : '#22c55e';
        context.fillRect(part.x * gridSize, part.y * gridSize, gridSize - 2, gridSize - 2);
    });
}

function update() {
    if (gameOver) {
        return;
    }

    direction = nextDirection;
    const head = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };

    const hitWall = head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount;
    const hitSelf = snake.some((part) => part.x === head.x && part.y === head.y);
    if (hitWall || hitSelf) {
        gameOver = true;
        scoreElement.textContent = `遊戲結束！分數: ${score}，按 Enter 重新開始`;
        return;
    }

    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score += 1;
        scoreElement.textContent = `分數: ${score}`;
        food = createFood();
    } else {
        snake.pop();
    }
    draw();
}

function restart() {
    snake = [{ x: 10, y: 10 }];
    food = createFood();
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    score = 0;
    gameOver = false;
    scoreElement.textContent = '分數: 0';
    draw();
}

document.addEventListener('keydown', (event) => {
    const keyDirections = {
        ArrowUp: { x: 0, y: -1 },
        w: { x: 0, y: -1 },
        W: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        s: { x: 0, y: 1 },
        S: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        a: { x: -1, y: 0 },
        A: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        d: { x: 1, y: 0 },
        D: { x: 1, y: 0 }
    };

    if (event.key === 'Enter' && gameOver) {
        restart();
        return;
    }

    const newDirection = keyDirections[event.key];
    if (!newDirection || (newDirection.x === -direction.x && newDirection.y === -direction.y)) {
        return;
    }
    event.preventDefault();
    nextDirection = newDirection;
});

draw();
setInterval(update, 120);
