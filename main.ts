input.onButtonPressed(Button.A, function () {
    basic.showString(Player)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(TopPlayer)
    basic.showNumber(TopScore)
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
let Player = ""
let TopPlayer = ""
let TopScore = 0
radio.setGroup(12)
radio.setTransmitPower(7)
TopScore = 0
TopPlayer = ""
