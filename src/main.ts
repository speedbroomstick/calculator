import Calculator from "./models/Calculator";
import "./style.css";
import { showInDisplay, handleOperation } from "./models/mainFunctions";

const calculator = new Calculator();
const buttonsNumber = [...document.querySelectorAll<Element>(".number")];
const buttonOperation = [...document.querySelectorAll<Element>(".operation")];
const display = document.querySelector<Element>(".display") as Element;

buttonsNumber.map((button) =>
  button.addEventListener("click", () => {
    if (button.textContent) {
      calculator.operands.operation === ""
        ? (calculator.operands.a = +(
            calculator.operands.a + button.textContent
          ))
        : (calculator.operands.b = +(
            calculator.operands.b + button.textContent
          ));
      if (display.textContent === "0") {
        display.textContent = "";
        display.textContent += button.textContent;
      } else {
        display.textContent += button.textContent;
      }
    }
  })
);

buttonOperation.map((operation) =>
  operation.addEventListener("click", () => {
    if (operation.textContent) {
      if (calculator.operands.operation !== "" && calculator.operands.a && calculator.operands.b) {
        showInDisplay(display,"" + handleOperation(operation.textContent, calculator)
        );
      } else {
        calculator.operands.operation = operation.textContent;
        display.textContent = "0";
      }
    }
    console.table(calculator.operands);
  })
);
