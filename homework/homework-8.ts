
export function largestNameOfArray(nameHero: string[]) {
  let largestName = '';
  for (let i = 0; i < nameHero.length; i++) {
    let name = nameHero[i];
    if (name.length > largestName.length) {
      largestName = name;
    }
  }
  return largestName;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray(heroes);
console.log(hero); // Profesor Charles Xavier 
