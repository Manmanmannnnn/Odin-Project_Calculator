const container=document.querySelector(".container");
const display=document.querySelector(".display");
const numberArea=document.querySelector(".numberButtons");
const operatorArea=document.querySelector(".operatorButtons");
const display1=document.querySelector(".display1");
const display2=document.querySelector(".display2");

//create calc display
function createNumpad(){
    const div=document.createElement('button');
    div.classList.add("numbers")
    div.style.width="50px"
    div.style.height='60px'
    div.style.border="2px solid black"
    div.style["text-align"]="center"
    div.style.fontSize="38px"
    div.style.borderRadius="10px"
    numberArea.appendChild(div);
}

function createOperators(){
    const div=document.createElement('button');
    div.classList.add("operators")
    div.style.width="63px"
    div.style.height='100px'
    div.style.border="2px solid black"
    div.style["text-align"]="center"
    div.style.fontSize="40px"
    div.style.padding="12px 0"
    div.style.borderRadius="15px"
    operatorArea.appendChild(div)
}
//create all numpads in calc w/ no text
for (let i=1;i<=12;i++){
    createNumpad();
}
let allNum=document.querySelectorAll(".numbers");


//create text for each num
for (let i=0;i<12;i++){
    const chars="1234567890.D"
    allNum[i].textContent=`${chars[i]}`
}
//create all operator btns w/ no text
for (let i=0;i<6;i++){
    createOperators();
}
let allOperator=document.querySelectorAll(".operators");
//create text of each operator
for( let i=0;i<6;i++){
    const chars=["+","-","x","÷","AC","="];
    allOperator[i].textContent=`${chars[i]}`;
}

//create calcu interactive functions

//operators
const sum=(a,b)=>a+b;
const minus=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>{
    if(b===0)return "Infinity";
    return a/b;
}

function typeNumber(){
    allNum.forEach((num)=>{
        num.addEventListener("click",()=>displayClicked(num));
    })
}

function displayClicked(numberPressed){
let numValue=numberPressed.textContent;
if (numValue === "." && display2.textContent.includes(".")) return;
if(numValue==="D"){
    let currentDisplay=display2.textContent;
    let updated=currentDisplay.slice(0,(currentDisplay.length-1))
    return display2.textContent=`${updated}`
}
display2.textContent+=`${numValue}`;
}

let storage={};

function operatorInitialized(){
    
    // +-/* operators
    for(let i=0;i<4;i++){
        allOperator[i].addEventListener("click",()=>{
            let storeDisplay=display2.textContent;
            let btnValue=allOperator[i].textContent;
            storage.firstNum=storeDisplay;
            storage.operator=btnValue;
            display2.textContent='';
            display1.textContent=`${storage.firstNum} ${ storage.operator} `
        })
    }
    //equal operator
    allOperator[5].addEventListener("click",()=>{
        let storeDisplay=display2.textContent;
        storage.secondNum=storeDisplay;
        if (!storage.firstNum || !storage.operator||!storage.secondNum) return; 
        display1.textContent+=`${storage.secondNum} =  `
        
        
        let operator=storage.operator;
        let firstNumber=Number(storage.firstNum);
        let secondNumber=Number(storage.secondNum);

        if(operator==="+"){
            let operator=sum(firstNumber,secondNumber);
            display2.textContent=`${operator.toFixed(2)}`
        }
        if(operator==="-"){
            let operator=minus(firstNumber,secondNumber);
            display2.textContent=`${operator.toFixed(2)}`
        }
        if(operator==="x"){
            let operator=multiply(firstNumber,secondNumber);
            display2.textContent=`${operator.toFixed(2)}`
        }
        if(operator==="÷"){
            let operator=divide(firstNumber,secondNumber);
            display2.textContent=`${operator.toFixed(2)}`
        }

        storage.operator='';
        storage.firstNum='';
        storage.secondNum='';
    })
    
    allOperator[4].addEventListener("click",()=>{
        display1.textContent='';
        display2.textContent="";
        storage={};
    })
}

typeNumber();
operatorInitialized();

