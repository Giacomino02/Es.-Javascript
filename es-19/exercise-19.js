const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Simon';

//Viene modificato anche person 1 in quanto person2 è stato definito uguale a person1, quindi modificandone uno cambia anche l altro.

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);