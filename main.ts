input.onButtonPressed(Button.A, function () {
    basic.showString("RK3")
})
basic.showString("RK3")
basic.forever(function () {
    if (stem.isHumanDetectionAndDarkWithThreshold(15)) {
        stem.turnON()
    } else {
        stem.turnOFF()
    }
})
