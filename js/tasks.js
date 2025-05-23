// const numbers = [1, 2, 3, 4, 5];
// const square = numbers.map(number => {
//   return number * number;
// });
// console.log(square);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const values = data.flatMap(value => value.values);
// console.log(values);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const result = people.some(item => item.age < 20);
// console.log(result);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const numbers = [2, 4, 6, 8, 10];

// const result = numbers.every(number => !(number % 2));
// console.log(result);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const result = numbers.find(number => number % 2);
// console.log(result);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const numbersArray = [4, 2, 5, 1, 3];
// const sorted = numbersArray.toSorted();
// console.log(sorted);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sorted = stringArray.toSorted();
// console.log(sorted);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const sorted = users.toSorted((a, b) => a.age - b.age);
// console.log(sorted);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const filtered = user.filter(item => item.age > 20);
// console.log(filtered);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// const numbers = [1, 2, 3, 4, 5];
// const count = numbers.reduce((acc, number) => (acc += number), 0);
// console.log(count);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// class Calculator {
//   constructor() {
//     this.total = 0;
//   }
//   number(value) {
//     this.total = value;
//     return this;
//   }

//   add(value) {
//     this.total += value;
//     return this;
//   }
//   subtract(value) {
//     this.total -= value;
//     return this;
//   }
//   divide(value) {
//     if (!value) {
//       console.log("Can't divide by 0");
//       return this;
//     }
//     this.total /= value;
//     return this;
//   }
//   multiply(value) {
//     this.total *= value;
//     return this;
//   }
//   getResult() {
//     return this.total;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10)
//   .add(5)
//   .subtract(3)
//   .multiply(4)
//   .divide(2)
//   .getResult();

// console.log(result);

/* ========================================================================================================================================================

======================================================================================================================================================== */

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set email(newEmail) {
//     return (this.#email = newEmail);
//   }
//   set login(newLogin) {
//     return (this.#login = newLogin);
//   }
// }

/* ========================================================================================================================================================

======================================================================================================================================================== */

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }
//   getEmployeeDetails() {
//     return { salary: this.salary, department: this.department };
//   }
// }

// const person = new Employee(
//   'Person',
//   50,
//   'male',
//   'mafdsada@nas.com',
//   '10000',
//   'wasd'
// );
