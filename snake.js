class Snake {
  constructor(Game) {
    this.game = Game;
    this.x = 0;
    this.y = 0;
    this.grid = 20;
    this.dx = this.grid;
    this.dy = 0;
    this.cell = [];
    this.maxCells = 2;
  }

  draw() {
    for (let i = 0; i < this.cell.length; i++) {
      this.game.ctx.fillStyle = "#f00";
      this.game.ctx.fillRect(
        this.cell[i].x,
        this.cell[i].y,
        this.grid,
        this.grid
      );
    }
    if (!this.endGame()) {
      this.game.ctx.font = "30px Arial";
      this.game.ctx.fillText("thua roi ahuhu", 200, 200);
    }
  }
  update() {
    if (this.endGame()) {
      this.x += this.dx;
      this.y += this.dy;
    }

    if (this.x >= this.game.canvas.width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = this.game.canvas.width;
    }

    if (this.y >= this.game.canvas.height) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = this.game.canvas.height;
    }
    this.cell.unshift({ x: this.x, y: this.y });
    if (this.cell.length > this.maxCells) {
      this.cell.pop();
    }
    this.handleEvent();
  }

  handleEvent() {
    document.addEventListener("keydown", (e) => {
      if (e.which === 37 && this.dx === 0) {
        this.dx = -this.grid;
        this.dy = 0;
      } else if (e.which === 38 && this.dy === 0) {
        this.dx = 0;
        this.dy = -this.grid;
      } else if (e.which === 39 && this.dx === 0) {
        this.dx = this.grid;
        this.dy = 0;
      } else if (e.which === 40 && this.dy === 0) {
        this.dx = 0;
        this.dy = this.grid;
      }
    });
  }

  eat(x, y) {
    if (this.x === x && this.y === y) {
      this.maxCells++;
      return true;
    }
    return false;
  }

  endGame() {
    for (let i = 1; i < this.cell.length; i++) {
      if (this.x === this.cell[i].x && this.y === this.cell[i].y) {
        return false;
      }
    }
    return true;
  }
}
