enum RadioMessage {
    message1 = 49434
}
let mySprite = 0
radio.onReceivedMessage(RadioMessage.message1, function () {
    mySprite = 0
})
