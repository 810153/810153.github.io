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
        console.error("��ܹB��Ÿ�");
}
res.innerHTML = ans;
})
})
    