// Enemies our player must avoid
const Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x, y, sprite){
  this.sprite = sprite;
  this.x = x;
  this.y = y;
};


Player.prototype.update = function(dt) {
};


// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Here we create an array that contains our new 3 enemies and their positions on the board.
const allEnemies = [];
const enemy1 = new Enemy(0, 60);
const enemy2 = new Enemy(100, 145);
const enemy3 = new Enemy(200, 230);
allEnemies.push(enemy1, enemy2, enemy3);


//Here we create and place the player object in starting position on the game board.
const player = new Player(200, 400, 'images/char-boy.png');


//Here we allow our player to move and restrict it from going out the game board.
Player.prototype.handleInput = function(movement){
  if (movement === 'left' && this.x > 0){
    this.x -= 100;

  }else if(movement === 'right' && this.x < 400) {
    this.x += 100;

  }else if(movement === 'up' && this.y > 0) {
    this.y -= 85;

  }else if(movement === 'down' && this.y < 340) {
    this.y += 85;
  };
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
