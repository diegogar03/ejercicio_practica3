let short = 0
let medium = 0
let tall = 0
let height = 0
input.onPinPressed(TouchPin.P0, function () {
    short = 0
    medium = 0
    tall = 0
    for (let index = 0; index < 50; index++) {
        height = randint(100, 200)
        if (height <= 150) {
            basic.showString("Short person")
            short += 1
        } else if (170 >= height && height >= 151) {
            basic.showString("Medium person")
            medium += 1
        } else if (height >= 171) {
            basic.showString("Tall person")
            tall += 1
        }
    }
    basic.showNumber(short)
    basic.showNumber(medium)
    basic.showNumber(tall)
})
