Data: List[number] = []

def on_button_pressed_a():
    global Data
    basic.show_icon(IconNames.SMALL_DIAMOND)
    Data = []
    for index in range(2000):
        Data.append(pins.analog_read_pin(AnalogPin.P0))
        basic.pause(1)
    basic.show_icon(IconNames.DIAMOND)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_icon(IconNames.LEFT_TRIANGLE)
    music.set_built_in_speaker_enabled(True)
    basic.pause(200)
    for index2 in range(2000):
        pins.analog_write_pin(AnalogPin.P14, Data.shift())
        basic.pause(1)
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    basic.show_icon(IconNames.SURPRISED)
    music.set_built_in_speaker_enabled(True)
    music.set_volume(136)
    music.ring_tone(442)
    basic.pause(200)
    music.stop_all_sounds()
    for index3 in range(100):
        pins.analog_set_pitch_pin(AnalogPin.P14)
        pins.analog_pitch(randint(0, 1023), 100)
    basic.show_icon(IconNames.YES)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)
