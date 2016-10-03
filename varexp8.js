/**
 * Created by william.eyre on 03/10/2016.
 */
var e1 = document.getElementById("inputButton")
e1.addEventListener("click", myFirst, false);

function myFirst() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    var number3 = parseInt(document.getElementById("number3").value);
    var total1 = (number1 + number2) * number3;
    var total2 = number1 + number2 + number3;
    document.getElementById("reply").innerHTML = total1 - total2 ;
}


