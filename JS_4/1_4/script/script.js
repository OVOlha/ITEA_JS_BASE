// 4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.

function fibonachi(n) {

  n = +prompt("Input any number");

  let a = 1;
  let b = 1;
  let c;

  for (i = 3; i <= n; i++) {

    c = a + b;
    a = b;
    b = c;

  }

  console.log(b);

  alert(b);
}
fibonachi();