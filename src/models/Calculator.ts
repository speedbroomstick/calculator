import { ICalculator } from "./types";

export default class Calculator implements ICalculator {
    constructor(public operands: { a: number; b: number; operation: string; } = {a:0,b:0,operation:""}){}

    add() {
        return this.operands.a = this.operands.a + this.operands.b;
    }
    subtract() {
        return this.operands.a = this.operands.a - this.operands.b;
    }
    multiply() {
        return this.operands.a = this.operands.a * this.operands.b;
    }
    devide() {
        return this.operands.a = this.operands.a / this.operands.b;
    }
}