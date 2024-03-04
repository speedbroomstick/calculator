import Calculator from "./models/Calculator";
import "./style.css";
import { showInDisplay, handleOperation } from "./models/mainFunctions";

const calculator = new Calculator();
const buttonsNumber = [...document.querySelectorAll<HTMLInputElement>(".number")];
const buttonOperation = [...document.querySelectorAll<HTMLInputElement>(".operation")];
const display = document.querySelector<Element>(".display") as Element;

buttonsNumber.map((button) =>
  button.addEventListener("click", () => {
    if(calculator.operands.operation){
      calculator.operands.b = +((calculator.operands.b??0) + button.value!)
      showInDisplay(display,""+calculator.operands.b)
    }else{
      calculator.operands.a = +((calculator.operands.a??0) + button.value!)
      showInDisplay(display,""+calculator.operands.a)
    }
  })
);

buttonOperation.map((operation) =>
operation.addEventListener("click", clickOperation)
);

function setDesabled(buttonOperation:HTMLInputElement[]){
  buttonOperation.map((button)=>{
    if(button.value === calculator.operands.operation){
      button.removeEventListener("click",clickOperation)
      button.classList.add("disabled")
    }else{
      button.addEventListener("click",clickOperation)
      button.classList.remove("disabled")
    }
  })
}
function clickOperation(this: any){
  if(calculator.operands.a && calculator.operands.b && calculator.operands.operation){
    showInDisplay(display,""+handleOperation(calculator.operands.operation!,calculator))
    calculator.operands.b = null;
  }
  calculator.operands.operation = this.value;
  setDesabled(buttonOperation)
}