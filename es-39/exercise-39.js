class Square { //  Math.pow(side, 2)
  constructor(side) {
    this.side = side;
  }
}

class Rectangle { //  w*h
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle { //  (r*r)*3,14
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure){
    // switch (figure.constructor.name) {
    //   case 'Square': return Math.pow(figure.side, 2);
    //   case 'Rectangle': return figure.width * figure.height;
    //   case 'Circle': return (Math.pow(figure.radius, 2))* Math.PI;
    // }

    if (figure.side){
      return (figure.side ** 2)
    } else if (figure.width, figure.height){
      return figure.width * figure.height
    } else if (figure.radius){
      return ((figure.radius ** 2) * Math.PI)
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));