let R1 = 0
let M = 0
let L1 = 0
maqueenPlusV2.I2CInit()
basic.forever(function () {
    L1 = maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1)
    M = maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM)
    R1 = maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1)
    if (L1 == 0 && M == 1 && R1 == 0) {
    	
    }
    if (L1 == 0 && M == 1 && R1 == 0) {
    	
    }
    if (L1 == 0 && M == 1 && R1 == 0) {
    	
    }
})
