
export let person = {
  name: 'Victor',
  age: 38,
  isActive: true,
  hobbies: ['futbol', 'voleibol'],
  toString() {
    let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
    console.log(objectString)
  }
};

//person.toString();
//console.log(person.name);

let car = {
  brand: 'Toyota',
  gearBox: 'Manual',
  year: 2015,
  color: 'black',
  tires: 4
}

let smartTv = {
  brand: 'LG',
  model: 'QLED',
  year: 2020,
  sizeInches: 50,
  isCurve: true
}

let youTubeVideo = {
  length: 3600,
  author: 'Victor Arboleda',
  comments: ['Buen video', 'Me gustó mucho el video', 'El peor que he visto'],
  title: 'Curso React',
  likes: 1500,
  dislikes: 100,
  isPrivate: false

}

console.log('Carro', car);
console.log('TV', smartTv);
console.log('Video', youTubeVideo);