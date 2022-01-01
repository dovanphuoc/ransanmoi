class Food {
  constructor(Game) {
    this.game = Game;
    this.x = 0;
    this.y = 0;
    this.grid = 20;
    this.update();
  }

  update() {
    this.x = (Math.floor(Math.random() * (19 - 0)) + 0) * this.grid;
    this.y = (Math.floor(Math.random() * (19 - 0)) + 0) * this.grid;
  }

  draw() {
    this.game.ctx.fillStyle = "green";
    this.game.ctx.fillRect(this.x, this.y, this.grid, this.grid);
  }
}
