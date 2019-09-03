// tests go here; this will not be compiled when this package is used as a library
broadcast.onEventWithArgs("消息", function () {
    basic.pause(200)
    led.toggle(3, 1)
})
broadcast.onEventWithArgs("消息", function () {
    led.toggle(1, 1)
})
broadcast.onEventWithArgs("消息", function () {
    for (let i = 0; i < 1111; i++) {
        basic.pause(1000)
    }
})
basic.forever(function () {
    broadcast.broadcast("消息")
    basic.pause(1000)
})
