// // ---------- OOP ----------

class vehical {
  constructor(vehicalName, vehicalColor) {
    console.log("constructor run");

    this.name = vehicalName;
    this.color = vehicalColor;
  }
  sayHello() {
    console.log("hello constructor");
  }
}

let vehical1 = new vehical("car", "red");

console.log(vehical1);
vehical1.sayHello();

class student {
  constructor(name, course, city) {
    this.studentName = name;
    this.studentCourse = course;
    this.studentCity = city;
  }
  info() {
      console.log(`Student name is ${this.studentName}\nStudent course is ${this.studentCourse}\nStudent city is ${this.city}`);
  }
}

let student1 = new student("hafsa", "web", "karachi");
console.log(student1);
student1.info();
