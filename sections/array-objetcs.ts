export interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

export let victor: Person = {
  name: 'Victor',
  age: 38,
  isActive: true
}

let camila: Person = {
  name: 'Camila',
  age: 12,
  isActive: false
}

let liliana: Person = {
  name: 'Liliana',
  age: 38,
  isActive: true
}

let people: Person[] = [victor, camila, liliana];

for (let i = 0; i < people.length; i++) {
  let person = people[i];
  console.log(person.name + ' ' + person.age);
}