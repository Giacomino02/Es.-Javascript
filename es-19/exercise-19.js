const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Simon';

// Quando si assegna un object (person1) ad un altro (person2) in modo diretto entrambi puntano alla stessa locazione di memoria e di conseguenza entrambi prendono le modifiche successive (in questo caso "Simon")

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);