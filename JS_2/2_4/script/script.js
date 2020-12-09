function magic(){

    let a = 10;
    let b = 25;
    let i;
    let k = 0;

for(i=a; i<=b; i++){
    k = k+ i;   

    if(i%2!==0)  {
        alert(i)
    } 
}
alert("Сума чисел між a та b: "+k);

}
magic();