

export let firstName: string = 'Victor';
let lastName: string = 'Arboleda';
let fullName: string = firstName + ' ' + lastName;


console.log('Hola', fullName)


let number1: number = 10;
let number2: number = 20;

let result = number1 + number2;
console.log('El resultado de', number1, 'más', number2, 'es', result);

let isActive: boolean = true;
let isRunning: boolean = false;
let hasKids: boolean = true;

isActive = !isActive; // cambiar el valor de la variable de un boolean

console.log('El usuario', fullName, 'esta activo:', isActive);