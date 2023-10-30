function clr(){
 document.getElementById("result").value = "";
}

function display(val){
 document.getElementById("result").value += val ;
}

function performEvaluation() {
    let x = document.getElementById("result").value;
    let y = eval(x); // predefined function
    document.getElementById("result").value = y;
}