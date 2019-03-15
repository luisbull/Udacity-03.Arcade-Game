// --------------ENEMIES -------------- //


const Enemy = function(x, y, speed) {

    // Here we input all the properties or methods that our new enemy will need
    // in order to function.
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images.
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 100;
    this.height = 83;
    this.collision = false;
};


// Here we create an array that will contain all our new enemies and their
// positions on the board.
const allEnemies = [];
const enemy1 = new Enemy(0, 60, 250);
const enemy2 = new Enemy(-100, 60, 200);
const enemy3 = new Enemy(-150, 145, 300);
const enemy4 = new Enemy(-200, 230, 250);
const enemy5 = new Enemy(-100, 230, 200);
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);


Enemy.prototype.update = function(dt) {
  // Here our enemies get motion and move from left to right of the game board
  // Here we also should multiply any movement by the dt parameter which will
  // ensure the game runs at the same speed for all computers.
  this.x += this.speed * dt;

  // Here we reset our enemies after crossing the game board and give them a random position
  if (this.x > 500){
    this.x = -100 * Math.floor(Math.random()* 4) -200;
  };

// Here we check if enemies and player collide
// collision code was taken from (see below).  It was modifed to my needs
// http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/#d-collision-detection
  if (this.x < player.x + player.width  && this.x + this.width/1.28  > player.x &&
		this.y < player.y + player.height/1.28 && this.y + this.height > player.y) {
      this.collision = true;

      // Here we return our player to starting position
      if(this.collision = true){

        player.x = 200;
        player.y = 400;
        console.log('LOST')
      }
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// --------------PLAYER -------------- //

const Player = function(x, y, sprite){
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.width = 100;
  this.height = 83;
};


//Here we create and place the player object in starting position on the game board.
const player = new Player(200, 400, 'images/char-princess-girl.png');


// Here we check if our player reaches the top of the board game
// and reset its location to starting position.
Player.prototype.update = function(dt) {
  if (this.y === -15){
    this.x = 200;
    this.y = 400;
    console.log('WON');
    alert('Player Won!!');

  }
};


// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//Here we allow our player to move and restrict it from going out the game board.
Player.prototype.handleInput = function(movement){

  if (movement === 'left' && this.x > 0){
    this.x -= 100;

  }else if(movement === 'right' && this.x < 400) {
    this.x += 100;

  }else if(movement === 'up' && this.y > 0) {
    this.y -= 83;

  }else if(movement === 'down' && this.y < 340) {
    this.y += 83;

  };
};

// The following code was given by Udacity.
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
