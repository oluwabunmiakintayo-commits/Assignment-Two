const student = { name: "Chidi", score: 50 };
Object.freeze(student);

student.score = 90;      // tries to change, but nothing happens
student.age = 20;        // tries to add, nothing happens
delete student.name;     // tries to delete, nothing happens

console.log(student);    // { name: "Chidi", score: 50 }