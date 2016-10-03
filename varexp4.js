/**
 * Created by william.eyre on 03/10/2016.
 */
var e1 = document.getElementById("inputButton")
e1.addEventListener("click", myFirst, false);

function myFirst()
{
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    document.getElementById("reply").innerHTML = +number1 + +number2;
}