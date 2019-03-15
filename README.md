# Classic Arcade Game Clone Project


## Table of Contents

* [How game was built](#how-game-was-built)
* [Game insallation](#game-installation)
* [How to play](#how-to-play)
* [Known issue](#known-issue)
* [External sources](#external-sources)

## How game was built

The starter project given by Udacity [link](https://github.com/udacity/frontend-nanodegree-arcade-game.git) or download original files directly by clicking [here](https://github.com/udacity/frontend-nanodegree-arcade-game/archive/master.zip) There are 3 folders (IMAGES = 17 file, CSS = 1 file, JS = 3 files) a HTML and README files.

I started by reading and analysing the notes inside all .JS files but specially APP.JS file as per instructions. I also opened, inspected the errors shown in the console of INDEX.HTML file.  The main functionality of the game was acomplished by adding and modifing code only in APP.JS file.

## Game installation

Go to: https://github.com/luisbull/udacity-arcade-game.git
  - Click on: Clone or Download.  (green color tab)
  - Download Zip file.
  - Load index.html in browser.
  - Play the game.

## How to play

To win, player has to reach the top of the game board(blue color)

Player starting position is at the center bottom of the game board.

Using keyboard keys (up, down, left and right) player will be able to move around the game board.

Player must avoid to be touch by enemies(bugs) crossing the gameboard at different speeds.  If player is touched by enemies(bugs), player will be moved back to starting position.

When player reaches the top of the game board (blue color) without being touched by any enemies(bugs) an alert message will inform the player that has won.  After pressing ok bottom player is moved back to starting position and can try to reach top of the board game again.

## External sources

ENGINE.JS code file content was provided by Udacity.

SOURCES.JS code file content was provided by Udacity.

Keyboard function code inside APP.JS was provided by Udacity. 

I made use of collition detection code from [http://blog.sklambert.com/html5-canvas-game-2d-collision-detection/#d-collision-detection] inside my APP.JS file.
