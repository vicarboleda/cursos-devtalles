
export function printMultiplicationTable(base: number, limit: number = 10) {
  if (limit <= 0) {
    limit = 10;
  }
  for (let i = 1; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}`);

  }
}

//   if (limit <= 0) {
//     throw new Error('El límite debe ser mayor a cero (0)')
//   } else {
//     for (let i = 1; i <= limit; i++) {
//       console.log(`${base} * ${i} = ${base * i}`);
//     }
//   }
// }

// export function printMultiplicationTable(num1: number, num2: number = 10) {
//   for (let i = 1; i <= num2; i++) {
//     console.log(`${num1} * ${i} = ${num1 * i}`);
//   }
// }