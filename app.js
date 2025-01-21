const role = 'admin';

if (role === 'manager') {
  console.log('Менеджер');
} else if (role === 'admin') {
  console.log('Админ');
} else if (role === 'user') {
  console.log('Пользователь');
} else {
  console.log('Неверная роль');
}

switch (role) {
  case 'manager':
    case 'admin': 
    console.log('Не руководитель');
    break;
  case 'user': 
    console.log('Пользователь');
    break;
  default:
  console.log('Неверная роль');
}

const num = 1;

switch(true) {
  case num > 0:
    console.log('Положительное число');
    break;
  case num < 0:
    console.log('Отрицательное число');
    break;
  default:
    console.log('Ноль!');
}