/**
 * Created by william.eyre on 03/10/2016.
 */
var e1 = document.getElementById("inputButton")
e1.addEventListener("click", myFirst, false);

function myFirst() {
    var number1 = parseInt(document.getElementById("number1").value);
var oneLessNumber = number1 -1
    var oneMoreNumber = number1 +1

    document.getElementById("reply").innerHTML = oneLessNumber + " " + oneMoreNumber


}