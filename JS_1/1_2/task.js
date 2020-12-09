function bufferValue(){
    let a=4;
    let b=9;

    let c = a;
    a = b;
    b = c;
    console.log("a: "+a + " b: "+b);
}

bufferValue();  