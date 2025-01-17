/*
Основная Проблема: Часто возникает необходимость создать длинную строку, сочетающую текст с переменными. Традиционно это делается с помощью конкатенации, используя оператор +, что может быть неудобным и трудночитаемым.

Решение: Шаблонные Строки

Ключевой элемент шаблонных строк — это использование обратных кавычек (` `), вместо обычных или двойных кавычек.
Переменные и выражения вставляются непосредственно в строку через ${expr}, где expr является любым JavaScript выражением.
Это упрощает создание динамических строк и делает код более читаемым.
Примеры Использования:

Конкатенация:
Традиционная: "Автор " + name + " заказал " + projectName + " по цене " + price + " долларов."
Шаблонная строка: Автор ${name} заказал ${projectName} по цене ${price} долларов.
Многострочные Строки:
Особенность шаблонных строк в том, что они поддерживают многострочность без необходимости использования спецсимволов вроде \n.
Просто нажимая Enter, можно перейти на новую строку внутри шаблона, что делает код еще более чистым и понятным.
Влияние Отступов:

Важно учитывать, что в шаблонных строках все символы, включая пробелы и табуляции, считаются частью строки. Отступы в коде могут привести к нежелательным пробелам в сгенерированной строке.
Применение:

Шаблонные строки активно используются в HTML и других областях для создания динамического контента.
Благодаря их гибкости и удобству формирования, шаблонные строки можно рассматривать как основной способ работы со строками в современном JavaScript.
Совет:

При частом использовании шаблонных литералов можно принять за стандарт использование обратных кавычек, однако важно различать случаи, когда требуется обычная строка без замены выражений.
Заключение: Шаблонные строки являются мощным инструментом в JavaScript для упрощения работы со строками, позволяя создавать динамические и многострочные строки более читаемым и удобным способом.
*/

const projectName = 'сайт магазина';
const price = 2000;
const author = 'Иван Иванов';

const template = author + ' заказал ' + projectName + ' по цене: ' + price + '$';
console.log(template)

const template2 = `${author} заказал ${projectName} по цене: ${price}$`;
console.log(template2)

const template3 = 'Проект \n' + 'Цена: ' + price + '$';
console.log(template3);

const template4 = `Проект
Цена: ${price}$`;
console.log(template4);

