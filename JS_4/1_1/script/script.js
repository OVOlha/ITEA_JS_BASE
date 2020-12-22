// Создать функцию calculate(operand1, operand2, sign), где operand1 и operand2 — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.
function calculate(operand1, operand2, sign) {

    operand1 = + prompt("Please? input first operand");
    sign = prompt("Please, input an operation sign");
    operand2 = + prompt("Please? input second operand");s

    let res;

    switch (sign) {
        case "+":
            res = operand1 + operand2;
            break;
        case "-":
            res = operand1 - operand2;
            break;
        case "*":
            res = operand1 + operand2;
            break;
        case "/":
            res = operand1 * operand2;
            break;
        default:
            alert("You input not an arifmetical sign, pleade try again!");
    }
   
    alert("The resalt of operation with " + sign + "    is " + res);
   
}
calculate();