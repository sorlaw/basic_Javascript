function checkIdealBody(height) {
  return `berat badan ideal kamu adalah : ${height - 100 - (height - 100) * (10 / 100)}`;
}
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

const Person = {
  name: prompt("Masukkan nama anda"),
};

var height = prompt("Masukkan tinggi badan ");

alert(checkIdealBody(height));

// var putra = new Person("Jeka", 17);

// console.log(putra);
