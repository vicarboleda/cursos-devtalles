

export function max(a: number, b: number, c: number) {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}

let maxValue = max(5, 22, 6);
console.log(maxValue);

