/**
 * Created by william.eyre on 03/10/2016.
 */
var e1 = document.getElementById("inputButton")
e1.addEventListener("click", myFirst, false);

function myFirst() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    if ((number1 > 10) || (number2 > 10)) {
        document.getElementById("reply").innerHTML = "one or both numbers is greater than 10";
    }
    else {
        document.getElementById("reply").innerHTML = "none of the numbers are greater than 10";

    }
}

