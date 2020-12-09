
function showTheLine(){
    let form1 = document.forms.line_form;
    let x11 =form1.x1.value;
    let x22 = form1.x2.value;
    let y11 = form1.y1.value;
    let y22 = form1.y2.value;
    let k = (y11-y22)/(x11-x22);
    let b = y22 - k*x22;

alert("y="+k+"*x+"+b);
}

