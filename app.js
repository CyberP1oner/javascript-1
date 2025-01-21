/* 
Задача:
Вася положил 12 000 на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500 через 2 года после снятия вклада. И остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ** срок в месяцах
*/

const deposit = 12000;
const annualInterestRate = 7; // годовая ставка в процентах
const housePrice = 13500;
const years = 2;

// Рассчитываем месячную процентную ставку
const monthlyInterestRate = annualInterestRate / 100 / 12;

// Рассчитываем итоговую сумму вклада через 2 года
const months = years * 12;
const finalAmount = deposit * (1 + monthlyInterestRate) ** months;

if (finalAmount >= housePrice) {
  const remainingAmount = finalAmount - housePrice;
  console.log('Вася может купить дом. Остаток после покупки:', remainingAmount.toFixed(2));
} else {
  console.log('Вася не может купить дом. Ему не хватает:', (housePrice - finalAmount).toFixed(2));
}