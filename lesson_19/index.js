'use strict';


function Human (obj){
  this.name = obj.name;
  this.age = obj.age;
}

Human.prototype.sayHello = function(){
  console.log(`Hello, my name is ${this.name}, i am ${this.age} years old`);
}



function AlevelStudent(obj){
  Human.call(this, obj);
  this.marks = obj.marks;
  
  
}

AlevelStudent.prototype = Object.create(Human.prototype);

AlevelStudent.prototype.avarageMark = function(){
  let sum = 0;
  for (let i =0; i < this.marks.length;i += 1){
    sum += this.marks[i];
  }
  console.log(sum / this.marks.length);
}

