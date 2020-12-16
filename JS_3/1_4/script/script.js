// 4. Создать два произвольных массива: один массив - любимая спортивная команда / модели автомобилей / города, во втором - количество игроков в команде / объем двигателя / количество жителей в городе. Объединить данные из двух массивов и вывести их в одну строку. 
function concJoin() {
    let cities = [];
    let people = [];

    let form1 = document.forms.cityForm;
    let cityValue = form1.city.value;
    let cityzenValue = form1.cityzen.value;

    cities = cityValue.split('\n');
    console.log(cities);

    people = cityzenValue.split('\n');
    console.log(people);


    let concatedArray = cities.concat(people);
    console.log(concatedArray);

    alert(concatedArray.join(" "));

}
concJoin();