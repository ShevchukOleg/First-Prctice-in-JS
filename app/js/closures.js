getBigName(userName); //"UNDEFINED"  визов функции с неопределенным аргументом поскольку переменная userName оглашена но не определена (Хойстинг)

function getBigName(name){// присвоение неопределенной переменной в функцию
  name = name + ""; // превращение значение переменной в строку "undefined"
  return name.toUpperCase(); // преобразование строки в верхний регистр
}

var userName = "Ivan";

//---------------------------------------------------------------------------------------------------------


function test (){
  var name = "Vasiliy"; // создание дополнительной переменной name  и присвоение значения
  return getBigName(userName); // вызов функции getBigName с лексическим окружением на первом уровне  var name и на втором  userName которое присваивается в аргумент функции(команда на исаользование переменной из лексического окружения)
}
function getBigName(name){ // значение переменной userName присвоено в аргумент name, (здесь не понятно почему оно не перезаписуется значением var name из лексического окруженияс  места вызова функции)
  name = name + ""; // трансформация в строку
  return name.toUpperCase(); // возврат пределаной строки "IVAN"
}
var userName = "Ivan";
console.log(test()); // вызов функции с переменной  userName в лексическом окржении разделе scope

//---------------------------------------------------------------------------------------------------------

var a = 1;
(function getA (){
  var a = 2;
  getRes();
})();

function getRes(){
  console.log(); // 1 => вызов функции происходит без присвоения аргумета и  a = 1 единственное значение для функции о 2 она не знает в нее оно не присваивается
}

//---------------------------------------------------------------------------------------------------------
function numberGenerator() {
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber; //  при вызове numberGenerator она создала переменную num и создала функцию checkNum дальше она увеличила переменную num на еденицу и вернула функцию checkNumber потом когда ты вызываешь number ты вызываешь фактически checkNumber функцию и она будет возвращать цифру 2 потому что она такой стала после вызыва numberGenerator
}
// вывод в перепенную number записуется результирующее лексическое окружение
var number = numberGenerator();
number(); // 2

//---------------------------------------------------------------------------------------------------------


var x = 10;

function foo() {
  var y = x + 5;
  return y;
}

function bar() {
  var x = 2;
  return foo();
}

function main() {
  console.log(foo()); // Статическая область: 15; Динамическая область: 15
  console.log(bar()); // Статическая область: 15; Динамическая область: 7
  return 0;
}

// ------------------------------------------
