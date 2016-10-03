/**
 * Created by william.eyre on 03/10/2016.
 */
var e1 = document.getElementById("inputButton")
e1.addEventListener("click", myFirst, false);

function myFirst()
{
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    if (number1 > number2)
        document.getElementById("reply").innerHTML = number1;
    else
        document.getElementById("reply").innerHTML = number2;

}