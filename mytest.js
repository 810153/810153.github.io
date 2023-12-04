document.addEventListener("DOMContentLoaded",function(){
let button = document.getElementById("btn");
button.addEventListener("click" , () => {
const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
const cal = document.getElementById("calculating signs").value;
const res = document.getElementById("result");

let ans;
switch(cal){
    case '+':
    ans = num1+num2;
    break;

    case '-':
    ans = num1-num2;
    break;

    case '*':
    ans = num1*num2;
    break;

    case '/':
    ans = num1/num2;
    break;
    default:
        console.error("¿ï¾Ü¹Bºâ²Å¸¹");
}
res.innerHTML = ans;
})
})
    