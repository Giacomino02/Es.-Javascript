const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
}

// Perché non stai modificando direttamente il valore della costante ma solo aggiungendo un elemento (il valore della costante è dichiarato una sola volta)

addStudent('Marco');
console.log(students);

