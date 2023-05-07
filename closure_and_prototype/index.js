String.prototype.capitalize = function () {
  return this.slice(0, 1).toUpperCase() + this.slice(1).toLowerCase();
};

// console.log("sAlAm".capitalize());

//**************

String.prototype.insertPlus = function () {
  let mid = Math.floor(this.length / 2);
  return this.slice(0, mid) + " + " + this.slice(mid);
};

// console.log("test".insertPlus());

//**************

Number.prototype.double = function () {
  return this ** 2;
};

// console.log((3).double());

//**************

Array.prototype.push = function (n) {
  return [...this, n];
};

// console.log([1, 2].push(3));

//**************

function add(number) {
  let total = 0;
  return function () {
    return (total += number);
  };
}

let updatedTotal = add(5);

// console.log(updatedTotal());
// console.log(updatedTotal());
// console.log(updatedTotal());

//**************

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const rect1 = new Rectangle(4, 5);

// console.log(rect1.getArea());

//**************

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return `${this.name} has ${this.age} years old`;
};

const person1 = new Person("Camil", 19);

// console.log(person1.introduce());

//**************

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  return `${this.name} is eating`;
};

const animal1 = new Animal("dog");

// console.log(animal1.eat());

//**************

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }

  return (last = this[this.length - 1]);
};

console.log([1, 2, 3, 4, 5].last());
