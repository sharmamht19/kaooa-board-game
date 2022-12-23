# kaooa-board-game

## Assumption
- Browser should allow to run javascript.
- Program can be run on browsers : chrome version 52 or 52+,Edge 14 or 14+, Firefox 54 or 54+.
- In consol log only valid mouse moves will be stored.
- Log file(doc) can be downloadable only at the end of the game i.e. winning cases only.

## Overview 
- The crows' objective is to surround the vulture and blockade him from moving.
- The vulture's objective is to capture four crows. He captures a crow by jumping over it.
- Crows may move from one spot to an adjacent vacant spot. Only one move is allowed per turn. No jumping is allowed for for crows.
- The vulture may move to an adjacent vacant spot. The vulture may also jump a crow and capture it. Jumps are only allowed in a straight line. 
  Captured crows are removed from play.
- The vulture must jump a crow if the opportunity presents itself. Only one jump per turn.

## How to Play
-- Crows go first: Player 1 places one of their crow tokens on any of the ten intersections of the game board.
-- Vulture goes next: Player 2 places the vulture on any vacant spot.
-- Crows continue "drop phase" : Player 1 one drops his second crow on a vacant spot.
-- Players alternate turns with the vulture moving along the game board and Player 2 dropping his flock of crows one by one onto the game board. Only 
   once all seven crows have been placed on the board can the crows begin moving.
-- Winning : The vulture wins if he captures at least 4 crows.
   The crows win if they manage to trap the vulture in a way that prevents him from making a legal move.

## Execution 
- The Game can be start by opening index.html file in a browser as :

```
  Open index.html with browser and start the game.
```

***
