export let limite = 100
for (let i = 1; i <= limite; i++) {
  console.log('let i', i);

  if (i === 5) {
    break;
  }
}

console.log('Fin de progama');