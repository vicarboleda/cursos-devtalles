export let grade: number = 90;

let letterGrade: string;

if (grade >= 90) {
  letterGrade = 'A'
} else if (grade >= 80) {
  letterGrade = 'B'
} else if (grade >= 70) {
  letterGrade = 'C'
} else if (grade >= 60) {
  letterGrade = 'D'
} else {
  letterGrade = 'F'
}


console.log('La nota del alumno es', letterGrade);
