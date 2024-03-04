import { ICalculator } from "./types";

function handleOperation(operation:string, calculator:ICalculator) {  
  calculator.operands.operation = ""
  switch (operation) {
      case "+":
        return calculator.add();
      case "−":
        return calculator.subtract();
      case "×":
        return calculator.multiply();
      case "÷":
        return calculator.devide();
      case "=":
        return calculator.operands.a
    }
  }
function showInDisplay(display:Element, content:string) {
    display.textContent = content;
}
export {handleOperation,showInDisplay};