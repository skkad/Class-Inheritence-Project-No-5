// import using require
const shape = require('./shape.js')
// declare class
class Circle extends Shape{
    constructor(radius){
        super(color)
    }

    calculateArea(){
        return 2*(Math.PI)*(this.radius*this.radius)
    }
}


// export class using module.exports
module.exports = Circle