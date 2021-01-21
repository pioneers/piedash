class Peripheral {
    constructor(uid, name) {
        // type
        this.uid = uid;
        this.name = name;
        this.params = {};
    }
}

/*
class Motor extends Peripheral {
    constructor(uid, name, velocity, dc) {
        super(uid, name);
        this.params = {
            'velocity': velocity,
            'dc': dc,
        }    
    }
}

class SensorArray extends Peripheral {
    constructor(uid, name, sensors) {
        super(uid, name);
        this.params = {
            'velocity': velocity,
            'dc': dc,
        }    
    }
}*/

// Generate peripherals with random parameter data