// // declare class
// class Shape{

//     constructor(color){
//         if(color===undefined || color===null){
//             this.color = 'purple'
//         }else{
//             this.color = color
//         }
//     }
//     drawShape() {
        
//     }
//     calculateArea(){
//         console.log("current area is zero")
//     }

// }

// // export class using module.exports
// module.exports = Shape

// declare class

class Shape {
    constructor(color) {
      if (color === undefined || color === null) {
        this.color = "green"
      } else {
        this.color = color
      }
    }
    drawShape() {
  
    }
  
    calculateArea() {
  
    }
}
  
  module.exports = Shape
  // export class using module.exports
