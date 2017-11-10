let mycanvas = document.getElementById('my-canvas');
let ctx = mycanvas.getContext('2d')
let snakeSize = 10;
let w = 350;
let h = 350;
let scroe = 0;
let snake;
let snakeSize = 10;
let food;

//Module Pattern
drawModule = () => {
    bodySnake = () => {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize)
    }
}