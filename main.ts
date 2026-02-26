/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daniel Brushett
 * Created on: 02/26/26
 * This program ...
*/

// start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Effect A
input.onButtonPressed(Button.A, function() {
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

// Effect B
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})