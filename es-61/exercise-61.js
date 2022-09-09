const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(obj => obj.id == id);
      
      if(person) {
        resolve(person)
      } else {
        reject('ERRORE! Questo ID è inesistente')
      }
    }, 1000);
    
  })
}

function fetchJobById(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(obj => obj.id == id);
      if(job){
        resolve(job)
      } else {
        reject('ERRORE! Lavoro inesistente')
      }
    }, 500);
  })
}

Promise.race([fetchPersonById(2), fetchJobById(2)])
.then((value) => console.log(value))
.catch((error) => console.log(error))