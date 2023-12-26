class Shape {
   constructor(width, height) {
      this.width = width;
      this.height = height;
   }
}
 
class Circle extends Shape {
   constructor(radius) {
      super();
      this.radius = radius;
   }

   getArea() {
      return Math.PI * this.radius * this.radius;
   }

   getPerimeter() {
      return 2 * Math.PI * this.radius;
   }
}
 
class Triangle extends Shape {
   constructor(sideOne, sideTwo, sideThree) {
      super();
      this.sideOne = sideOne;
      this.sideTwo = sideTwo;
      this.sideThree = sideThree;
   }
 
   getArea() {
      const perimeter = this.getPerimeter();
      const s = perimeter / 2;
      return Math.sqrt(s * (s - this.sideOne) * (s - this.sideTwo) * (s - this.sideThree));
   }

   getPerimeter() {
      return this.sideOne + this.sideTwo + this.sideThree;
   }
}
 
class Rectangle extends Shape {
   constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
   }
 
   getArea() {
      return this.width * this.height;
   }

   getPerimeter() {
      return (this.width + this.height) * 2;
   }
}
 

// Круг
const circleEl = new Circle(50);
console.log(circleEl.getArea());
console.log(circleEl.getPerimeter());

// Треугольник
const triangleEl = new Triangle(30, 30, 30);
console.log(triangleEl.getArea());
console.log(triangleEl.getPerimeter());
 
// Прямоугольник
const rectangleEl = new Rectangle(20, 30);
console.log(rectangleEl.getArea());
console.log(rectangleEl.getPerimeter());
