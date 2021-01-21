radio.onReceivedValue(function (name, value) {
    if (value > TopScore) {
        TopScore = value
        TopPlayer = name
    }
    basic.showString(TopPlayer)
    basic.showNumber(TopScore)
})
let TopPlayer = ""
let TopScore = 0
radio.setGroup(12)
radio.setTransmitPower(7)
TopScore = 0
TopPlayer = ""
