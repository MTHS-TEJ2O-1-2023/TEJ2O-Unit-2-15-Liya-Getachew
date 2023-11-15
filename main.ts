/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya Getachew
 * Created on: Nov 2023
 * This program moves a sprite around the edge of the microbit.
*/

// variables
let xValue: number = 0
let loopCounter: number = 0
let sprite: game.LedSprite = null

// setup
basic.clearScreen()
basic.showIcon(IconNames.Target)

// when button A is pressed, move sprite around edge
input.onButtonPressed(Button.A, function () {
  // prep screen
  basic.clearScreen()
  sprite = game.createSprite(0, 0)

  loopCounter = 0
  while (loopCounter <= 3) {
    
    // reset xValue to 0
    xValue = 0
    while (xValue <= 4) {
      // move sprite over once
      basic.pause(500)
      sprite.move(1)
      xValue++
    }
    // turn sprite 90 degrees
    sprite.turn(Direction.Right, 90)
    loopCounter++
  }

  sprite.delete()
  basic.pause(500)
  basic.showIcon(IconNames.Diamond)
})
