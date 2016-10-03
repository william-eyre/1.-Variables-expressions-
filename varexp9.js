/**
 * Created by william.eyre on 03/10/2016.
 */
var e1 = document.getElementById("inputButton")
e1.addEventListener("click", myFirst, false);

function myFirst() {
    var number1 = parseInt(document.getElementById("number1").value);
    var sorryMessage = "sorry, can't display"
    if(number1<0 || number1<10 || number1>10)
    {
        document.getElementById("reply").innerHTML=number1;
    }
else {
        document.getElementById("reply").innerHTML=sorryMessage
    }
}
