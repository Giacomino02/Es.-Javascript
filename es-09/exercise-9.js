function getKeys(obj) {
  let keys = [];
  for(let key of Object.keys(obj)){
    keys.push(key);    
  }
  return keys
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);

//esecuzione alternativa dell'esercizio: console.log(Object.keys(person))

//risultato finale: ['firstName', 'lastName', 'age', 'city', 'job']