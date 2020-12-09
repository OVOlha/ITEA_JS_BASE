
function middleNumb(){

let form1 = document.forms.mainForm;

let a = form1.numba.value;
 let aa = Number(a);
let b = form1.numbb.value;
 let bb = Number(b);
let c = form1.numbc.value;
 let cc = Number(c);
let d;

if(a==b || a==c || b==c ){
    alert("Error!");
}
else
{
     d = (aa + bb + cc);  
    alert(d);
    
}

}
    middleNumb();
