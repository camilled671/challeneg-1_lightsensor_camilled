while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() > 0) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
