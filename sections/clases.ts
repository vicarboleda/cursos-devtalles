
export class Car {
  public readonly brand: string;
  public doors: number;
  public isRunning: boolean;
  public fuelTank: number;
  public type: string;
  private createdAt: number;

  constructor(brand: string, type: string) {
    this.brand = brand;
    this.doors = 0;
    this.fuelTank = 0;
    this.isRunning = false;
    this.type = type;
    this.createdAt = new Date().getDate();
  }

  turnOn() {
    if (this.isRunning) {
      console.log('El carro estaba encendido y dañó el moto');
      return;
    }
    if (this.fuelTank <= 0) {
      console.log('El carro no tiene combustible');
      return;
    }
    this.isRunning = true;
    console.log('El carro está encendido');

  }

  fillTank(gas: number) {

    if (gas <= 0) {
      console.log('El combustible debe ser positivo');
      return;
    }
    let newFuelTank = this.fuelTank + gas;
    if (newFuelTank >= 100) {
      this.fuelTank = 100
    } else {
      this.fuelTank = newFuelTank;
    }
  }
}

let myToyota = new Car('Toyota', 'Corolla');
console.log(myToyota);
myToyota.fillTank(50);
myToyota.fillTank(20);
myToyota.turnOn();
console.log(myToyota);
