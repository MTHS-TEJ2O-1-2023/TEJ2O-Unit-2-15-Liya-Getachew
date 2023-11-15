"""
Created by: Liya G
Created on: Nov 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *


# variables 
sprite_xy_coordinate = 0
turnSprite = 0
set_pixel = None

# setup
display.clear()
display.show(Image.GIRAFFE)
sleep(1000)

# loop
while True:
    if button_a.is_pressed():
        # setup
        display.clear()
        turnSprite = 0

        while turnSprite <= 3:
            
            sprite_xy_coordinate = 0
            while sprite_xy_coordinate <= 4:
                sleep(500)

                display.set_pixel(turnSprite, sprite_xy_coordinate, 9)
                sleep(500)
                display.clear()

                sprite_xy_coordinate += 1
            turnSprite += 1
