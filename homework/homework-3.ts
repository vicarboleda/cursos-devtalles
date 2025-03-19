export let base = 10;
let h = 5

function calcArea(base: number, h: number) {
  return (base * h) / 2
}

let a = calcArea(base, h)
console.log(`El área es de ${a}`)

let area = (base * h) / 2
console.log(area);