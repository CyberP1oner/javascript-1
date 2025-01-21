// Мое решение
const answer = prompt('Сколько будет 7 + или - 15');
const correctAnswer = 7 - 15;
const isCorrect = 7 + 15;
const isRobot = 'Я не робот';

if (answer == correctAnswer) {
  alert('Ты неплохо разбираешься в математике!');
  console.log('Ты неплохо разбираешься в математике!');
} else if (answer == isCorrect) {
  alert('Нужно подучить математику!');
  console.log('Нужно подучить математику!');  
} else if (isRobot) {
  alert('Ты все же робот!');
  console.log('Ты все же робот!');
}

// Решение автора 1

/*
const res = prompt('Сколько будет 7 + или - 15');
  switch (true) {
  case res === 'Я не робот':
  case Number(res) === 22:
  case Number(res) === -8:
    console.log('Верно!');
    break;
  default:
    console.log('Неверно!');
*/

// Решение автора 2

/*
if (res === 'Я не робот') {
  console.log('Верно!');
} else {
  const resNum = Number(res);
  switch (resNum) {
    case 22:
    case -8:
      console.log('Верно!');
      break;
    default:
      console.log('Неверно!');
}
*/