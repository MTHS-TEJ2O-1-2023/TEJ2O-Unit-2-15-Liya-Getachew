/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Liya Getachew
 * Created on: Nov 2023
 * This program moves a sprite around the edge of the microbit.
*/

// variables
let spriteXYCoordinate: number = 0
let turnSprite: number = 0
let sprite: game.LedSprite = null

// setup
basic.clearScreen()
basic.showIcon(IconNames.Target)

// when button A is pressed, move sprite around edge
input.onButtonPressed(Button.A, function () {
  // prep screen
  basic.clearScreen()
  sprite = game.createSprite(0, 0)

  turnSprite = 0
  while (turnSprite <= 3) {
    // reset spriteXYCoordinate to 0
    spriteXYCoordinate = 0
    while (spriteXYCoordinate <= 4) {
      // move sprite over once
      basic.pause(500)
      sprite.move(1)
      spriteXYCoordinate++
    }
    // turn sprite 90 degrees
    sprite.turn(Direction.Right, 90)
    turnSprite++
  }

  sprite.delete()
  basic.pause(500)
  basic.showIcon(IconNames.Diamond)
})
