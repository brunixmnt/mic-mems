let Data: number[] = []
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    Data = []
    for (let index = 0; index < 2000; index++) {
        Data.push(pins.analogReadPin(AnalogPin.P0))
        basic.pause(1)
    }
    basic.showIcon(IconNames.Diamond)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.LeftTriangle)
    music.setBuiltInSpeakerEnabled(true)
    basic.pause(200)
    for (let index = 0; index < 2000; index++) {
        pins.analogWritePin(AnalogPin.P14, Data.shift())
        basic.pause(1)
    }
    basic.showIcon(IconNames.Yes)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Surprised)
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(136)
    music.ringTone(442)
    basic.pause(200)
    music.stopAllSounds()
    for (let index = 0; index < 100; index++) {
        pins.analogSetPitchPin(AnalogPin.P14)
        pins.analogPitch(randint(0, 1023), 100)
    }
    basic.showIcon(IconNames.Yes)
})
