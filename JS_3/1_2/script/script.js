function pushUser(){
    let fruits = ["Apple", "Peach", "Pineapple"];

    alert(fruits);

    // let userIndex = +prompt("Input array index"); // якщо юзер вводить індекс
    let userIndex = prompt("Input array index"); //якщо юзер вводить назву елемента
    let indexAfter = fruits.indexOf(userIndex);
    
    fruits.splice(indexAfter+1, 0, "Mango");    

    alert(fruits);

}

pushUser();