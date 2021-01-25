input.onButtonPressed(Button.A, function () {
    basic.showString(Player)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(TopPlayer)
    basic.showNumber(TopScore)
})
radio.onReceivedString(function (receivedString) {
    Laststring = receivedString
    ThisChar = ""
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            if (receivedString.charAt(X * 4 + Y) == "1") {
                led.plot(X, Y)
            }
        }
    }
    basic.showString(Laststring)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(highScore)
})
radio.onReceivedValue(function (name, value) {
    highScore = value
    Player = name
    if (value > TopScore) {
        TopScore = value
        TopPlayer = name
    }
    basic.showString(TopPlayer)
    basic.showNumber(TopScore)
})
let highScore = 0
let ThisChar = ""
let Player = ""
let Laststring = ""
let TopPlayer = ""
let TopScore = 0
radio.setGroup(12)
radio.setTransmitPower(7)
TopScore = 0
TopPlayer = ""
let Screen = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
Laststring = ""
