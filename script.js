const container=document.querySelector(".container");
const display=document.querySelector(".display");
const numberArea=document.querySelector(".numberButtons");
const operatorArea=document.querySelector(".operatorButtons");

//create calc display
function createNumpad(){
    const div=document.createElement('div');
    div.classList.add("numbers")
    div.style.width="50px"
    div.style.height='50px'
    div.style.border="1px solid black"
    div.style["text-align"]="center"
    numberArea.appendChild(div);
}

function createOperators(){
    const div=document.createElement('div');
    div.classList.add("operators")
    div.style.width="60px"
    div.style.height='80px'
    div.style.border="1px solid black"
    div.style["text-align"]="center"
    operatorArea.appendChild(div)
}

for (let i=1;i<=12;i++){
    createNumpad();
}

for (let i=0;i<12;i++){
    const chars="1234567890.D"
    let allNum=document.querySelectorAll(".numbers")
    allNum[i].textContent=`${chars[i]}`
}

for (let i=0;i<6;i++){
    createOperators();
}

for( let i=0;i<6;i++){
    const chars=["+","-","x","÷","AC","="];
    let allOperator=document.querySelectorAll(".operators")
    allOperator[i].textContent=`${chars[i]}`;
}