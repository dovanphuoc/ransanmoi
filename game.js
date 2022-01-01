const WIDTH = 500;
const HEIGHT = 600;
const SNAKE_WIDTH = 20;
const SNAKE_HEIGHT = 20;

class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = WIDTH;
    this.canvas.height = HEIGHT;
    document.body.style.textAlign = "center";
    this.canvas.style.border = "1px solid #000";
    document.body.appendChild(this.canvas);
    this.snake = new Snake(this);
    this.food = new Food(this);
    this.startGame();
  }

  startGame() {
    this.loop();
  }

  loop() {
    this.update();
    this.draw();
    setTimeout(() => this.loop(), 60);
  }

  update() {
    this.snake.update();
    if (this.snake.eat(this.food.x, this.food.y)) {
      this.food.update();
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.snake.draw();
    this.food.draw();
  }
}
const game = new Game();
