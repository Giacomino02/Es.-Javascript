// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  // ...
  const ceoSalary = calculateSalary('ceo');
  const managerSalary = calculateSalary('manager');
  const ctoSalary = calculateSalary('cto');
  const developerSalary = calculateSalary('developer');
  const otherSalary = calculateSalary('other');
  if (calculateSalary===1800) {
    console.log(managerSalary);
    console.log(ctoSalary);
  }
  else if (calculateSalary===2200) {
    console.log(ceoSalary);
  }
  else if (calculateSalary===1500) {
    console.log(developerSalary);
  }
  else {
    console.log(otherSalary);
  }
  
}


