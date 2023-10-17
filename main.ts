enum RadioMessage {
    message1 = 49434
}
function test (mySprite: Sprite) {
    console.log("test")
}
radio.onReceivedMessage(RadioMessage.message1, function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 3 3 3 3 3 3 . 
        . . . . . 3 3 3 . . . . . . . 3 
        . . . . . 3 3 . . . . . . . 3 . 
        . . . . 3 . 3 3 . . . . . . 3 . 
        . . . . 3 . . 3 . . . . . . 3 . 
        . . . 3 . . . . 3 . . . . . 3 . 
        . . . 3 . . . . . 3 . . . . 3 . 
        . . . 3 . . . . . . 3 3 3 . 3 . 
        . . . 3 . . . . . . . . . 3 3 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
let mySprite: Sprite = null
radio.setGroup(1)
radio.sendMessage(RadioMessage.message1)
namespace lol {
    forever(function(){
    if(controller.A.isPressed()){
              console.log("test")
    }
    })
}
namespace say{
    function print(message: string) {
        console.log(message)
    }
    print("message")
}
