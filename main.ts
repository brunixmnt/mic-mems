let Data: number[] = []
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    Data = []
    for (let index = 0; index < 3000; index++) {
        Data.push(randint(0, 254))
    }
    basic.showIcon(IconNames.Yes)
})
