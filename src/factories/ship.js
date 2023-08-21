class Ship {
    constructor(name, length) {
        this.name = name;
    this.life = length;
    }
    hit = () => {
        this.life += -1;
    }
    isSunk = () => {
        if(this.life == 0) return true;
        else return false;
    }
}

export default Ship;