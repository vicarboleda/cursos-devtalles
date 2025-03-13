

export let employees: string[] = ['Victor', 'Camila', 'Liliana'];
let salaries: number[] = [1500, 2400, 3200];
//let flowers: string[] = ['Rosa', 'Girasol', 'Lirio', 'Orquidea'];

for (let i = 0; i <= employees.length - 1; i++) {
  let employe = employees[i];
  let salary = salaries[i];
  //console.log(employe + ' tiene un salario de', salary);
  //console.log(employees[i], 'tiene un salario de ', salaries[i]);
  console.log(`${employe} tiene un salario de ${salary}`);
}

// for (let i = 0; i < flowers.length; i++) {
//   console.log(flowers[i]);
// }