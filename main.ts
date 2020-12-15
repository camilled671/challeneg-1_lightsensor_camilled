// while True:
// print("light level:"+input.light_level())
// if input.light_level() > 20:
// light.set_all(light.rgb(0,0,0))
// else:
// light.set_all(light.rgb(0,0,255))
while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() > 6) {
        light.setAll(light.rgb(0, 0, 0))
    } else if (input.lightLevel() < 13) {
        light.setAll(light.rgb(255, 0, 255))
    } else {
        light.clear()
    }
    
}
