
//  3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. Размер каждого вложенного массива - 3.

function createArr() {
    let arrSize = +prompt("Input array size");
    let coolArray = [];
    let i;
    for (i = 0; i <= arrSize - 1; i++) {
        if (i == 0) {
            coolArray[i] = ['zero', 'zero', 'zero'];
        }
        else if (i % 2 == 0) {
            coolArray[i] = ['even', 'even', 'even'];
        }
        else {
            coolArray[i] = ['odd', 'odd', 'odd'];
        }
    }

    console.log(coolArray);
}

createArr();