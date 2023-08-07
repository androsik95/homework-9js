
// Задание 1

// let countries = new Map();
// countries.set('Russia', 'Moscow');
// countries.set('France', 'Paris');
// countries.set('USA', 'Washington');
// countries.set('Germany', 'Berlin');
// console.log(countries); 

// function getCapital(country) {
//     return countries.get(country);
//   }

// function addCountry(country, capital) {
//     countries.set(country, capital);
//   }

//   function deleteCountry(country) {
//     countries.delete(country);
//   }

// console.log(getCapital('Russia')); 
// addCountry('Italy', 'Rome');
// deleteCountry('USA');

// Задание 2

// let colors = new Set();
// colors.add("red");
// colors.add("green");
// colors.add("blue");

// function checkColor(color) {
//   return colors.has(color);
// }
// function addColor(color) {
//   colors.add(color);
// }

// function deleteColor(color) {
//   colors.delete(color);
// }
// console.log(checkColor("red")); 

// addColor("yellow");
// deleteColor("green");
// colors.forEach((color) => {
//   console.log(color);
// });


// Задание 3

// function sumRecursive(n) {
//     if (n === 1) {
//       return 1;
//     } else {
//       return n + sumRecursive(n - 1);
//     }
//   }
//   console.log(sumRecursive(5))

//   function factorialRecursive(n) {
//     if (n === 1) {
//       return 1;
//     } else {
//       return n * factorialRecursive(n - 1);
//     }
//   }
//   console.log(factorialRecursive(5))

// Задание 4

// function createCounter() {
//     let counter = 0;
  
//     function increment() {
//       counter++;
//       return counter;
//     }
  
//     return increment;
//   }

  
//   function makeAdder(num1) {
//     return function(num2) {
//       return num1 + num2;
//     }
//   }

//   function multiplier(num1) {
//     return function(num2) {
//       return num1 * num2;
//     }
//   }

//   let counter = createCounter();
  
//   console.log(counter()); 
//   console.log(counter()); 
  
//   let adder = makeAdder(5);
  
//   console.log(adder(3)); 
  

//   let multiply = multiplier(4);
  
//   console.log(multiply(2));

// Задание 5

// let person = {
//     FirstName: "",
//     LastName: "",
  
//     get firstName() {
//       return this.FirstName;
//     },
  
//     set firstName(value) {
//       this.FirstName = value;
//     },
  
//     get lastName() {
//       return this.LastName;
//     },
  
//     set lastName(value) {
//       this.LastName = value;
//     }
//   };

//   Object.defineProperty(person, "FullName", {
//     get: function() {
//       return this.FirstName + " " + this.LastName;
//     },
//     set: function(value) {
//       let fullName = value.split(" ");
//       this.FirstName = fullName[0];
//       this.LastName = fullName[1];
//     }
//   });
//   class Circle {
//     constructor(radius) {
//       this.radius = radius;
//     }
  
//     get diameter() {
//       return this.radius * 2;
//     }
  
//     set diameter(value) {
//       this.radius = value / 2;
//     }
//   }

// person.firstName = "John";
// person.lastName = "Doe";
// console.log(person.firstName); 
// console.log(person.lastName); 

// person.FullName = "Jane Smith";
// console.log(person.firstName); 
// console.log(person.lastName); 
// console.log(person.FullName); 

// let circle = new Circle(5);
// console.log(circle.diameter); 

// circle.diameter = 12;
// console.log(circle.radius); 

// Задание 6


// function delayPromise() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Прошло 5 секунд");
//       }, 5000);
//     });
//   }
  
//   delayPromise().then((result) => {
//     console.log(result); 
//   });

//   function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//       if (num > 10) {
//         resolve("Число больше 10");
//       } else {
//         reject("Число меньше 10");
//       }
//     });
//   }
  
//   checkNumber(7)
//     .then((result) => {
//       console.log(result); 
//     })
//     .catch((error) => {
//       console.log(error); 
//     });
  
//   checkNumber(15)
//     .then((result) => {
//       console.log(result); 
//     })
//     .catch((error) => {
//       console.log(error); 
//     });