/**
 * Created by william.eyre on 03/10/2016.
 */
var e1 = document.getElementById("inputButton")
e1.addEventListener("click", myFirst, false);

function myFirst()
{
    var userInput = document.getElementById("WillsBox").value;
    document.getElementById("reply").innerHTML = userInput;
}