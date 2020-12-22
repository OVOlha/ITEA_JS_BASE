// 2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем

function numDegree() {

    let num = +prompt("Input number");
    let degree = +prompt("Input degree");

    let result = num ** degree;

    alert(result);
}

numDegree();