#while True:
    #print("light level:"+input.light_level())
    #if input.light_level() > 20:
        #light.set_all(light.rgb(0,0,0))
    #else:
        #light.set_all(light.rgb(0,0,255))
while True:
    print("light level:"+input.light_level())
    if input.light_level() > 6:
        light.set_all(light.rgb(0,0,0))
    elif input.light_level() <=13:
        light.set_all(light.rgb(255,165,0))
    else:
        input.light_level() <6
        light.set_all(light.rgb(0,0,255))