input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    // Maximum Temperature
    // Minimum Temperature
    if (input.temperature() >= 37.4 || input.temperature() <= 13.5) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
