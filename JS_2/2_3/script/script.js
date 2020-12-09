function maxNum() {
    let a = +prompt("Введіть число a");
    let b = +prompt("Введіть число b");
    let c = +prompt("Введіть число c");

    if (a > b && a > c) {
        alert("Max is: " + a);
    }

    else if (b > a && b > c) {
        alert("Max is: " + b);
    }
    else {
        alert("Max is: " + c);
    }

}

maxNum();