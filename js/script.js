'use strict'; //строгий режим

                                                    //Раздел 2:Основы JS
                                                    //Переменные и строгий режим

let number=5;
const leftBorderWidth=1;

number=10;
console.log(number);

const obj ={
    a:50
};
obj.a=10;
console.log(obj);

console.log(name);  //нет ошибки
var name = 'Ivan';  //var нельзя использовать в коде потому, что переменная объявленная через var существует
                    //до того как она была объявлена в коде
                    //Хойстинг - поведение переменной, когда ее можно использовать до того как она объявлена 
                    // или всплытие переменных

{
    let result=50; //переменные let, const имеют ограничение области видимости фигурными скобками {}
}
console.log(result); //переменная result не видна, она находится в области видимости объекта

const vehicleBodyWidth = 5000;
const vehicleBodyLength = 4000;
console.log('Ширина кузова автомобиля:' + vehicleBodyWidth + ', длина' + vehicleBodyLength);

// Request
// Data
// response 
// PascaleCase - стиль для азвания классов в js

//snake_case

//UPPER_SNAKE_CASE - стиль обозначения констант, которые нельзя менять
const COLOR_RED = '#F00';

                                        //11.классификация типов данных в JS

/*Существует 8 типов данных:
1. простые типы(примитивы):
числа 1,2,3
Строки 'string'
boolean true/false
null - что-то просто не существует
underfined - что-то существует, но значения не имеет
Symbol
BigInt - тип данных который отображает большие числа

2. комплексные типы (объекты):
    2.1 специальные:
массивы[]
функции
даты
регулярные выражения
ошибки
    2.2 оычные:
*/


let numder = 4.6;
console.log(-4/0);
console.log('string'*9); //NaN (Not a nomder)

const persone = 'Alex';

const bool = true;

//console.log(something); //=>Null - не существует

let und;
console.log(und); //=>undefined - существует, но не имеет значения (пустая коробка)

                //ОБЪЕКТ это структура хранения данных в парном формате, ключ:значение

const objTwo = {        //объект может содержать какие то данные, которые называются СВОЙСТВАМИ ОБЪЕКТА
    name:'Andrei',      //и какие то действия, которые называются МЕТОДАМИ
    age: 25,            //СВОЙСТВО ОБЪЕКТА записано в формате ключ:значение
    isMarried: false,            
};

console.log(objTwo.name);

                        //МАССИВ используется для хранения данных, которые идут строго по парядку

//              1           2        3      4         5   6 - ключи объекта массив это номера по порядку
let arrOne = ['plum.pmg', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arrOne[1]); //=> orange.jpg
//массив это частный случай объекта

                            //12.Разница между объектами и массивами и не очевидные синтаксические возможности

const arrTwoMas = ['a', 'b', 'c'];
const arrTwoObj = {
    a:'a',
    b:'b',
    c:'c'
};
console.log(arrTwoMas[1]);
console.log(arrTwoObj.b);
//console.log(arrTwoObj['b']); //способ через [] скобки для кириллицы или цифр чтобы не было ошибок
                             //обязательно ставить ковычки '' иначе JS подумает, что обращаюсь к переменной

arrTwoObj.d= '1234';
console.log(arrTwoObj.d);

const storeName = 'Ozon';
const storeDescription = {
    budget:10000,
    employees: ['Andrei', 'Sergei', 'Olga'],
    products: {
        cup:10,
        pansel:5,
    },
    open:true    
};
                                            //13. Простое общение с пользоватилем
//alert('Hello'); //всплывающая подсказка

//const result = confirm('Are you here?');
//console.log(result);
/*
const answer = +prompt('Вам есть 18?', '18');
console.log(answer+5); //вся информация, которая приходит от пользователя это строка
*/

const answers = [];

//команды prompt confirm alert тестировать только внутри браузера, консоль в VScode их не понимает

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', ''); 
// answers[2] = prompt('Сколько вам лет?', '');

//document.write(answers);

console.log(typeof(answers));

                                            //14.Интерполяция
const category = 'toys';
//console.log('https://someurl.com/' + category); //соеденение строк приёмом КОНКАТИНАЦИЯ
//console.log(`https://someurl.com/${category}/5`); //соеденение строк приёмом ИНТЕРПОЛЯЦИЯ

//const user = 'Ivan';
//alert(`hello, ${user}`);
                                            //15.Операторы в JS

console.log('arr' + '- object');
console.log(4 + '5');
//console.log(4 + +'5'); //если перед строкой поставить +, то она превратится в число
                        //унарный +, это + который ставится перед чем то
let incr = 10,
    decr = 10;

//incr++; //оператор инкремент (увеличения на 1) Форма записи после значения - ПОСТФИКСНАЯ
//decr--; //оператор декремент (уменьшения на 1)

//++incr; //форма запеси перед значением - ПРЕФИКСНАЯ
//--decr;

console.log(incr++); // ПОСТФИКСНАЯ форма сначала возвращает старое значение, потом изменяет его
console.log(decr--);

console.log(++incr); // ПРЕФИКСНАЯ форма сразу возвращает новое значение
console.log(--decr);

console.log(5%2); //оператор % возвращает остаток от деления двух чисел

//операторы сравнения
console.log(2*4 == 8);     
console.log(2*4 == '8');   //оператор сравнения
console.log(2*4 === '8');  //оператор строгого сравнения

//логические операторы
//&&  //оператор и работает только тогда когда два и больше подопотных являются правдивыми выражениями
//||  //оператор или работает только тогда когда один из этих вариантов будет правдивым
/*
const isChecked = true,
      isClose = false;
console.log(isChecked && isClose);

const isChecked = true,
      isClose = false;
console.log(isChecked || isClose);

const isChecked = true,
      isClose = false;
console.log(!isChecked || isClose);
*/
console.log(2+2*2 !='6'); // != - оператор 'не равно'
console.log(2+2*2 !=='6'); // != - оператор строгого сравнения 'не равно'

                            //16.Система контроля версий GIT и сервис GitHub
 
/*
Как работает система git(есть три состояния):
1. Когда файлы просто созданы
2. Когда гит следит за определенными какими то фвйлами
3. Когда git создал контрольную точку (коммит)

Алгоритм добавления файла в git:
1.а) чтобы использовать командную строку в git нужно добавить необходимую папку в VScode и перейти во вкладку terminal                            
1.б) или Shift + правая кн.м. => открыть окно powershell 
2) команда => git init - команда инициализации Git, следить за выбранной папкой
3) необходимо настроить user name & email
4) узнать статус моего репозитория - git status
 

 алгоритм добавления файла в репозиторий GitHub
 git status 
 git add -A
 git commit -a -m'add anything file'
 git push
*/
                                //19. Практика. Начинаем создавать приложение

/*
const personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
const nameOfLastMovieOne = prompt('Один из последних просмотренных фильмов?', '');
const feedbackOfLastMovieOne = prompt('Насколько оцениваете его?', '');
const nameOfLastMovieTwo = prompt('Один из последних просмотренных фильмов?', '');
const feedbackOfLastMovieTwo = prompt('Насколько оцениваете его?', '');

const personalMovieDB = {
    count: personalMovieDB.count,
    movies: {
        nameOfLastMovieOne:feedbackOfLastMovieOne,
        nameOfLastMovieTwo:feedbackOfLastMovieTwo,
    },
    actors: {},
    genres: [],
    privat: false,
};
console.log(personalMovieDB);
*/
/*
const personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: personalMovieDB.count,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const nameOfLastMovieOne = prompt('Один из последних просмотренных фильмов?', '');
const feedbackOfLastMovieOne = prompt('Насколько оцениваете его?', '');
const nameOfLastMovieTwo = prompt('Один из последних просмотренных фильмов?', '');
const feedbackOfLastMovieTwo = prompt('Насколько оцениваете его?', '');

personalMovieDB.movies.nameOfLastMovieOne = feedbackOfLastMovieOne;
personalMovieDB.movies.nameOfLastMovieTwo = feedbackOfLastMovieTwo;

console.log(personalMovieDB);
*/
                                                    //20. Условия
//способ записи условий 

//условия работают по следующему принцепу
// if (если true (например а=false - это true)) {
    //то условие выполняется
//}

if (4 == 9) {
    console.log('ok');
} else {
    console.log('Error');
}

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Much');
// } else {
//     console.log('ok!');
// }

//способ записи условий при помощи тернарного оператора
//тернарный потому, что в его работе учавствуют аж 3 аргумента
// (num == 50) ? console.log('ok!') : console.log('Error');

// + - бинарный аргумент (между двух аргументов)

/*
const num = 50;
switch(num) {
    case 49:  //switch проверяет только на строгое соответствие
    console.log('Неверно');
    break;
    case 100:
        console.log('Неверно');
    break;
    case 50:
        console.log('В точку');
    break;
    case 50:
        console.log('Не в этот раз');
    break;
}
*/
                                            //21. Логические операторы
// false are: 
// undefined
// null 
// NaN 
// 0
// ''

//operator && (and) - will done if all условия are true
//if all true so return last value
// const hamburger = true,
//       fries = true;
// if (hamburger && fries) { //write condition
//     console.log('I'm full!');
// }
// console.log ((hamburger && fries));

// const hamburger = 3,
//       fries = 1;
//       cola = 0;
      
// console.log(hamburger === 3 && cola && fries)

// if (hamburger === 3 && cola === 1 && fries) { //write condition
//     console.log('everybody are full');
// } else {
//     console.log('we go out');
// }

//operator || (or) - will done if one условия are true
//if all false so return last value

/*
const hamburger = 3,
      fries = 3,
      cola = 0,
      nuggets = 2;
      
if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) { //write condition
    console.log('everybody are happy');
} else {
    console.log('we go out');
}
console.log(hamburger === 3 || cola || fries);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);
*/

                                                          //home work
/*
console.log( NaN || 2 || undefined ); //2
 
console.log( NaN && 2 && undefined ); //NaN
 
console.log( 1 && 2 && 3 ); //3
 
console.log( !1 && 2 || !3 ); //false
 
console.log( 25 || null && !3 ); //25
 
console.log( NaN || null || !3 || undefined || 5); //5
 
console.log( NaN || null && !3 && undefined || 5); //5
 
console.log( 5 === 5 && 3 > 1 || 5); //true

//have the condition done?
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!') //done, 2
}
console.log(hamburger === 3 && cola || fries === 3 && nuggets)

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!') //done, 2
}
console.log(hamburger || cola || fries === 3 || nuggets)

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
console.log(hamburger && cola || fries === 3 && nuggets) //false
*/

                                                         //22. Cycles

let num = 50;
/*

//цикл while
while (num <= 55) {  //we will do anything actions if cycles is going
    console.log (num);
    num++;
}
*/
/*

//цикл do
do {
    console.log (num);
    num++;
}
while (num < 55);
*/

//цикл for

//сначала идет ключевое слово for
// это условие должно состоять из трех аргументов, но они не обязательны
//1. обычно создается переменная i (iterator)
//!!!обязательно ставиться ; между аргументами наших условий!!!
//2. пишем условие при котором цикл остановит свою работу
//3. записываем шаг цикла, что будет происходить каждый раз в новом цикле
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        break;  //оператр прирывания
        //continue; //если хотим избежать каких то значений
    }
    console.log(i);
}                             

                                   // 23. Цикл в цикле и метки
                                   
//Итерация цикла это повторение цикла
for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) { //внутри вложенного цикла используется аргумент j
        console.log(j);
}
}

//let result = '2'; //почему со второго цикла пропадает число 2??? 
const length = 7; //потому, что мы присваиваем новое значение result

for (let i = 1; i < length; i++){
    for (let j = 0; j < i; j++){
        result += 1;
    }
    result += '\n';
}

console.log(result);

//error - expected an assignment or function call and instead saw an expression
        //ожидал присваивания или вызова функции и вместо этого увидел выражение

first: for (let i = 0; i < 3; i++) { //first - метка. 
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) { 
        console.log(`Second level: ${j}`);  
        for (let k = 0; k < 4; k++) {
            if (k=== 2) {continue first; }
            console.log(`Third level ${k}`);
    }
}
}
//Метки используются вместе с операторами break и continue.
//Они выступают в роли идентификатора выражения, на который можно сослаться.

                                //Home work 3
//1
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

//2
for (let i = 20; i >= 10; i--) {
    console.log(i);
    if (i===13) {break;}
}

//3
for (let i = 2; i <= 10; i+=2) {
    console.log(i);
}

//4

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) { //если i делится на 2, то не показывать
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i < 16) {
    
    i++;
    if (i % 2 === 0) { 
        continue;
    } else {
        console.log(i);
    }
}

//5
/*
const arrayOfNumbers = [];

for (i = 5; i <= 10; i++) {
    arrayOfNumbers.push(i);
}
console.log(arrayOfNumbers);
return arrayOfNumbers;
*/

/*
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
console.log(arrayOfNumbers.length); //получаем количесво эл-тов в массиве
return arrayOfNumbers;
*/

                                        //Home work 4
/*
//1
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i=0; i < arr.length; i++) {
    result [i] = arr [i]    
}
console.log(result)
//2
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i=0; i < data.length; i++) {
    if (typeof data[i] == 'number') {
        data[i]=data[i]*2
    } else {
        data[i]=data[i] + ' - done'
    } 
}
console.log(data)

//3
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

let j = -1;
for (let i=4; i >=0; i-- ) {
    
    j++;
    result[j]=data[i];
}
console.log(result)
console.log(result.length)
*/
                                // 25.Функции, стрелочные функции                          
//функции это различные действия в js

function showFirstMessage() {
    console.log('Hello World!')
}
showFirstMessage();

//Имя функции должно быть глаголом с препиской над чем выполняется действие

//Ананимные функции вызываются и используются прямо здесь и сейчас только один, поэтому им имя двать не нужно
//Если у функции нет имени, то в будующем мы к ней не сможем обратиться
//Аргументы это данные которые функция может использовать внутри себя

//Директива let позволяет объявить локальную переменную с областью видимости, ограниченной текущим блоком кода "{}". 
//В отличие от ключевого слова var, которое объявляет переменную глобально или локально во всей функции, 
//независимо от области блока.


//let num = 20; //Глобальная переменная видна во всем срипте

function showFurstMessage (text) { //имя ф-ции должно быть глаголом с препиской над чем совершается действие
    console.log (text);
    let num = 20; //локальная переменная существует только в лакальной области видимости
}
console.log(num);

//Когда функция возвращает функции концепция замыкания актуальна, возвращаемая функция имеет доступ к переменным,
//которые не находятся в глобальной области видимости, но при этом существуют в её же замыкании
//Замыкание функции - это сама функция вместе со всеми переменными, которые ей доступны (находятся внутри ее
//области видимости)
//Замыкание - это коллекция переменных из облости видимости во время создания функции


//когда функция объявляется, то она содержит описание функции и замыкание

//1  function createCounter() {
//2  let counter = 0
//3  const myFunction = function() {
//4  counter = counter + 1
//5  return counter
//6  }
//7  return myFunction  //мы возвращвем описание функции и её замыкание (рюкзак с переменными,
                        //которые были в области видимости во время её создания)
//8  }
//9  const increment = createCounter()
//10 const c1 = increment()
//11 const c2 = increment()
//11 const c3 = increment()
//13 console.log('example increment', c1, c2, c3)

//если функция не находит переменную внутри своего блока то она поднимается на уровень выше это и 
//относится к замыканию

                                    
function calc (a, b) {
    return (a + b); // return возвращает значение наружу (в глобальную область видимости)
}
console.log (calc(4, 3));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret(); //присваеваем переменной функцию
console.log(anotherNum);

// function declaration - созданется до начала выполнения скрипта можно вызывать перед объявлением как var
//сначала браузер пробигается по скрипту и находит все переменные var и функции function declaration,
//он их создает, он их объявляет и после этого наш код начинает выполняться по порядку. 
//Какое преимущество у этого? Если функция существует до того как она объявлена мы можем ее вызывать до объявления.
//
function foo () {
    //cod
}
//function expression - создается только тогда, когда доходит поток кода, можно вызвать только после объявления

//let foo = function () {
    //cod
//}
// cтрелочная функция - не имеет своего контекста (this). Её нельзя вызвать
()=>

//const logger = function () {
//    console.log('Hello');
//};
logger ();

const calcTwo = (a, b) => {
    console.log('1');
    return a + b; //функция может возвращать что угодно, даже функцию
};

                                                //26.еще раз про аргументы функции
function convert (amount) {

}

//don't repiate yourself

                                                    //27. Return

const usdCurr = 28;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;  //return - функция возвращается значение вместо себя, вконце своего действия
    //после return функция заканчивает свою работу
}

function promotion (result) {
    console.log (result * discount); 
}

promotion (convert(500, usdCurr));

//функция всегда возвращает значение, если значения нет, то underfind или если она не содержить return

function test () {
    for ( let i = 0; i < 5; i ++) {
        console.log (i);
        if (i===3) return;
    }
    console.log('Done');
}

test ();

//6. Задание на работу с функциями

let c = '';
function getMathResult(a, b) {
    for (let i=1; i <= b; i++) {
       if (i < b) {c +=  `${a * i}---`;}
       if (i == b) {c +=  `${a * i}`;}
    }
    if ( typeof (b) != 'number' || b <= 0) {return a}
    return c;
}
let d = getMathResult (5, 'r');
console.log (d);

                                        // 28.Методы и свойства у строк и чисел
//Методы это вспомогательные функции
//Свойства это вспомогательные значения 

const str = 'Some fruit';
//console.log(str.length); //length is property. Свойство ставится без скобок
//console.log(str[2]); //получение части строки через индекс
console.log(str.toUpperCase()); //не меняет исходое значение, а создает новое
console.log(str.indexOf('fruit')); //узнать c какого индекса начинается слово (поиск подстроки)
console.log(str.slice(5, 10)); //вырезание части строки для дальнейшего использования,
//второе значение писать на 1 больше
console.log(str.slice(5)); //можно указать только начало
console.log(str.slice(-5, -1)); //можно начать с конца строки используя минус
console.log(str.substring(5, 10)); //тоже что slice, но нельзя использовать минус
console.log(str.substr(5, 5)); //второе значение это количество символов вырезания

//методы чисел
const numTwo =12.2
console.log(Math.round(numTwo)); //округление (самое распространенное)
const testTwo = '12.2px'
console.log(parseInt(testTwo)); //перевод из десетичной системы в двоичную, но можно перевести строку в число
console.log(parseFloat(testTwo)); //вернуть число или строку значение в десетичном формате

                                        //7. Упражнения по написанию кода
//1
/*
function calculateVolumeAndArea(lengthEdge) {
    let volume = lengthEdge * lengthEdge * lengthEdge;  
    let area = lengthEdge * lengthEdge * 6;
    if (typeof lengthEdge != 'number' || lengthEdge <= 0) {
        console.log ('При вычислении произошла ошибка');
    } else {
        console.log(`Объём куба:${volume}, площадь всей поверхности:${area}`);
    }
    
}
calculateVolumeAndArea(5);
*/

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

//2
/*
function getCoupeNumber(numberOfSeat) {
    let numberOfWagon
    if (numberOfSeat > 4 && numberOfSeat <= 36 && numberOfSeat % 1 == false) {
        numberOfWagon = numberOfSeat / 4
        console.log(Math.ceil(numberOfWagon)) 
    } 
    if  (numberOfSeat <= 4 && numberOfSeat > 0 && numberOfSeat % 1 == false) {
        numberOfWagon = 1
        console.log(numberOfWagon) 
    } 
    if (typeof numberOfSeat != 'number' || numberOfSeat < 0 || !Number.isInteger(numberOfSeat)) {
        console.log(`Ошибка. Проверьте правильность введенного номера места`) 
    } 
    if (numberOfSeat === 0 || numberOfSeat > 36) {
        console.log(`Таких мест в вагоне не существует`) 
    }
    return numberOfSeat
}

getCoupeNumber(0);
*/

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);
console.log(getCoupeNumber(33));

                                        //8. Упражнения по написанию кода

//1
function getTimeFromMinutes(minutesInput) {
    let hoursOutput = Math.floor(minutesInput / 60);
    let minutesOutput = minutesInput % 60;

    if (typeof (minutesInput) !== 'number' || minutesInput < 0 || !Number.isInteger(minutesInput)) {
        return "Ошибка, проверьте данные";
    } else if (minutesInput < 60)  {
        return `Это ${hoursOutput} часов и ${minutesOutput} минут`;
    } else if (minutesInput >= 60 && minutesInput < 120)  {
        return `Это ${hoursOutput} час и ${minutesOutput} минут`;
    } else if (minutesInput > 60)  {
        return `Это ${hoursOutput} часа и ${minutesOutput} минут`;
    } 
} 

console.log (getTimeFromMinutes(60));

//2
function findMaxNumber(numberOne, numberTwo, numberThree, numberFour) {
    let result = numberOne + numberTwo + numberThree + numberFour;
    
    

    if (Number.isNaN(result) || typeof (result) !== 'number' ) {
        return 0;
    } else {
        return Math.max (numberOne, numberTwo, numberThree, numberFour) ;
    }
}
console.log (findMaxNumber(1, 2, 3, 4));
    // if (typeof (result) !== 'number' || result === NaN) {
    //     return 0;
    // } else {
    //     return result;
    // }

                                        //9. Упражнения по написанию кода


/*    
function fib(number) {   
    if (number > 0 && Number.isInteger(number)) {
        let arr = [0, 1]; 
        let result;
        result =  `${arr[0]} ${arr[1]}`;   
        for (i=0; i<=number; i++) {
            let a = arr[i]+arr[i+1];
            arr.push(a);
            
            result += ` ${arr[i+2]}`
        }
        
        return result;
    } else if (typeof (number) !== 'number' || number <= 0) {
        return '';
    } 
}

console.log(fib(5));
*/
function fib(number) {
    if (number > 0 && Number.isInteger(number)) {
        let arr = []; 
        let result = ``;
        for (let i=0; i<number; i++) {
            
            if (i==0) {
                arr.push(i);
                result += `${arr[i]}`;
            }
            if (i==1) {
                arr.push(i);
                result += ` ${arr[i]}`;
            }
            if (i>=2) {
                arr.push(arr[i-2]+arr[i-1]);
                result += ` ${arr[i]}`;
            }   
        }
        
        return result;
    } else if (typeof (number) !== 'number' || number <= 0 || !Number.isInteger(number)) {
        return '';
    }    
}
fib(4);
console.log(fib(4));

                                            //30. Метод trim()
                                            //31. callback-function
//callback-function - позволяет нам быть уверенным что определенный код не начнет свое исполнение,
// пока предыдущий код не закончит свое исполнение
//callback-function - это фнкция которая должна быть выполнена после того,
//как другая функция завершила свое выполенение

//вариан без callback-function
function first () {
    setTimeout(function() {
        console.log(1)
    }, 500)
}

function second () {
    console.log(2)
}

first()
second()
//2
//1

//вариан с callback-function
function first (number, callback) {
    setTimeout(function() {
        console.log(number)
    }, 500);
  callback ();
}

first (1, function() {
    console.log(2)
});

                                    //32.Объекты, деструктуризация объектов

const options = {//объекты это структуры, которрые могут сохранять в себе любые типы данных в формате ключ:значение
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black', //вложенный объект
        bg: 'red'
    },
    makeTest: function() {  //метод (какое то действие внутри объекта), который мы создали самостоятельно
        console.log('Test');
    },
};

const {border, bg} = options.colors //деструктуризация объекта
console.log(border) //black

const [a, b, c] = ["ay", "bee", "see"]; //деструктуризация массивов
console.log(a, b, c); //ay bee see

options.makeTest() //запускаем метод (также как и функцию)
//встроенные методы в js
console.log(Object.keys(options)) //переводим объект в массив 
console.log(Object.keys(options).length) //определяем количество ключей

//console.log(options.name)
//delete options.name
//console.log(options)

let counter = 0
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значениеv ${options[key][i]}`)
            counter++ //считаем количество ключей
        }    
    } else {
        console.log(`Свойство ${key} имеет значениеv ${options[key]}`)
        counter++ //считаем количество ключей
    }
}
console.log(counter)

//JS - это объектно ореентированный язык и все сущности, которые в нем есть сводятся к объектам

                                        //33. Массивы и псевдомассивы

//Массивы это структуры которые содержат элементы по порядку

const arr = [1, 2, 3, 6, 8]

arr.pop()  //удалить элемент с конца
arr.push() //добавить элемент в конец
arr.map() //метод map() позволяет вызвать переданную функцию один раз для каждого элемента массива,
//формируя новый массив из результатов вызова этой функции. Обращаю Ваше внимание, что функция обратного вызова, 
//переданная в качестве параметра метода map() не будет вызвана для удалённых, или пропущенных элементов массива.

//перебрать элементы массива способ 1
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

//перебрать элементы массива способ 2 (можно использовать break и continue)
// for (let value of arr) { //цикл for of только для массивов, строками и псевдомассивами
//     console.log(value)
// }

//перебрать элементы массива способ 3 (основной, нельзя использовать break и continue)
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

//Еще перебирающие методы массивов:
const str = prompt('', '') //пользователь отправил товары в одну строку

const products = str.split(', ') //переводим строку в массив, 
//нужно указать через какой знак пользователь перечисляет товары (здесь через ",")

products.sort(compareNum) //метод сортировки изначально сортирует всё как строки
function compareNum(a, b) { //callback функция, которая позволяет правельно отсортировать числа
    return a - b;
} 
  

//console.log(products)
console.log(products.join(';'))//переводим массив в строку,
//нужно указать через какой знак переводить 

//Псевдомассивы - это структура, которая хранит данные по порядку, но не имеет никаких встроенных методов

//35.Передача данных по ссылке и по значению, Spread оператор
const a = 5
const b = a // передача данных по значению, возможна только со строками и числами и не возможна для объектов
            //так как объекты являются ссылочными данными

//способ 1 для копирования ссылочных данных через создание поверхностных копий
function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
}
const newNumbers = copy(numbers)

newNumbers.a = 10

console.log(newNumbers)
console.log(numbers)

//способ 2 для копирования ссылочных данных через создание поверхностных копий
const add = {
    d: 17,
    e: 20
}

const clone = Object.assign({}, add);//метод объеденения двух объектов 1 - главный объект, 2 - присоеденяемый
// с помощь данного метода можно клонировать объект оставив вместо первого объекта пустые скобки

//способ 3 создания копии массива
const oldArray = ['a', 'b', 'c']
const newArray = oldArray.slice

//способ 4 создания копии c помощью оператора разварота
function log (a, b, c) {
  console.log(a)
  console.log(b)
  console.log(c)

}

const numm = [2, 5, 7]

console.log(...numm);

const array = ['a', 'b']

const newAarray = [...array]

const q = {
    one: 1,
    two: 2
}

const newObj = {...q}
console.log(newObj)

const video = ['youtube', 'video', 'rutube']
      blogs = ['word', 'livejournal', 'blogger']
      internet = [...video, ...blogs, 'vk', 'facebook']

      console.log(internet)

                        //Упражнение по написанию кода 10

const personalPlanPeter = {
    name: "Peter",
    age: "30",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {  
        const {languages} = obj.skills
        const langUpperCase = languages.join(' ')
        return `Мне ${obj.age} и я владею языками: ${langUpperCase.toUpperCase()}`
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))

function showExperience(plan) {
  const {exp} = plan.skills
  console.log(exp)
  return exp
}
showExperience(personalPlanPeter)

function showProgrammingLangs(plan) {
  let str = ''
  const {programmingLangs} = plan.skills
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    
  }
  return str
}
console.log(showProgrammingLangs(personalPlanPeter))

                //Упражнение по написанию кода 11
//1
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  const str = arr.join(' ')
  console.log(str)
  if (str.length > 0) {
    return `Семья состоит из: ${str}`
  } else {
    return `Семья пуста`
  }
}

showFamily(family)

//2
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    const str = arr.join('\n')
    console.log (`${str.toLowerCase()}`)
}

standardizeStrings(favoriteCities)

//3
const someString = 'This is some strange string';
function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr

//4
const baseCurrencies = ['USD'];
const additionalCurrencies = [];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')

/*
или
const arrSum = baseCurrencies.concat(additionalCurrencies)
function availableCurr(arr, missingCurr) {
    let strOne = 'Доступные валюты:\n'
    let strTwo = ''
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) {
            delete arr[i]
        } else {
            strTwo += `${arr[i]}\n`
        }
    }
     
    if (strTwo.length === 0) {
        strOne = 'Нет доступных валют'
    }
    return strOne + strTwo
}
availableCurr(arrSum, 'USD')
console.log(availableCurr(arrSum, 'USD')) */

                    //36. Основы ООП, прототипно-ориентированное наследование
//Смысл ООП в том, что мы представляем любую вещь как объект с набором свойств и методов

//бывают обычные примитиы и объекты

//Прототип - легковой автомобиль, все легковые автомобили имеют одни и теже свойства и методы,
//  но с разными значениями. Это и есть применение ООП и Прототипов в реальной жизни

//Любые методы прототипно у нас наследуются от объектов

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello')
    }
}


// const john = {
//     health: 100
// }

//john.__proto__ = soldier // установили прототипом джона, солдата (устаревший вариант записи)
const john = Object.create(soldier) //1.создали новый объект джон, который будет прототипно наследоваться от солдата

//Object.setPrototypeOf(john, soldier); // 2.установили прототипом джона, солдата
john.sayHello()

                // 39.Динамическая типизация - это возможность одного типа данных превращаться в другой
//Число может стать строкой и тд

//Конкатинация - Способ изменения типа данных, когда мы что то складываем со строкой

//Виды динамичиской типизации:

// 1.В строку
//Способ 1 превращения в строку
console.log(typeof(5 + '')) //string

//Способ 2 превращения в строку
console.log(typeof(String(null))) //string

// 2.В число
//Способ 1 превращения в число
console.log(typeof(+'5')) //унарный плюс

//Способ 2 превращения в число
console.log(typeof(Number('4')))

//Способ 3 превращения в число
console.log(typeof(parseInt('15px', 10)))

// 3.В булиновое значение
/*Всегда будет false:
0, '', null, undefind, NaN

Все остальное будет true
*/

//Способ 1
let switcher = null;
if (switcher) { //здесь false по этому в консоль ничего не выводится
    console.log('Working...')
}
switcher = 1 //значение 1 это true

if (switcher) { //здесь true по этому в консоль выводится 'Working...'
    console.log('Working...')
}

//Способ 2
console.log(typeof(Boolean('4')))

//Способ 3
console.log(typeof(!!'4444'))

                                                            // 40.Замыкание и лексическое окружение

//Замыкание это когда функция сначала пытается найти что-то внутри себя и если она этого не находит,
//то она обращается к чему то что находится более глобально

//Определение разделению лексического окружения на две части:
// Первая часть (local) - это внутреннее лексическое окружение (environment record) - это объект в котором как свойства
//хранятся все локальные переменные этой функции и некая другая информация this
//Так выглядет объект с внутренней частью лексического окружения этой функции (наход в части local)

//Вторая часть это внешнее лексическое окружение, снаружи фигурных скобок (находится в части script)

//лексическое окружение это технический объект а любая переменная внутри этого окружения это его свойство
//любая переменная это свойство объекта лексического окружения. 
//лексическое окружение это технический объект, напрямую мы с ним взаимодействовать никак не можем, не получить его
//не изменить. Его работу контролирует наш интерпритатор, то есть наш браузер
//лексическое окружение существует у любого блока кода ограниченного фигурными скобками

let number = 5;

function logNumber() {
    console.log(number)
}

number = 6
logNumber()

number = 8
logNumber()

//Замыкание это ссылка внутри локальной области видимости {} на переменные из глобальной области видимости 

//Замыкания это функция, которая запоминает свои внешние переменные и может получить к ним доступ

//Лексическое окружение (как я понимаю) это область видимости

//Тест 1
function foo(a,b) {debugger
    const [first, second] = a;debugger
    const {eng} = b;debugger
 
    return `${a[0]} ${eng}`;debugger // то есть ${а[0]} ${eng}
}debugger

const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});debugger
console.log (result);debugger

                                                            //41. Задачи с собеседования

let y = 1; 
let x = y = 2; 
//alert(x); 
console.log(y) //2

console.log( "1"[0] ) //1

console.log(('a' && 'b'))

                                                // 42. Получение элементов со страницы
// DOM - document object model

                                    //47. Рекурсия.(ничего не записывал, все пометки в видео)

                                    function setOptions(height, width, ...additional) {
                                        console.log(height, width, ...additional)
                                    }
                                    setOptions(400, 500, 'red', 'top');