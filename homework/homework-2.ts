
export let kilometer = 10;
let milla = 0.62

function convertKilometerToMillas() {
  return kilometer * milla
}
let millas = convertKilometerToMillas()
console.log(`${kilometer} * ${milla} es igual a ${millas}`);