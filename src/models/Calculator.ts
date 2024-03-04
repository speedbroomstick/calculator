import { ICalculator } from "./types";

export default class Calculator implements ICalculator {
    constructor(public operands: { a: number|null; b: number|null; operation: string|null; } = {a:null,b:null,operation:null}){}

    add() {
        return this.operands.a = this.operands.a! + this.operands.b!;
    }
    subtract() {
        return this.operands.a = this.operands.a! - this.operands.b!;
    }
    multiply() {
        return this.operands.a = this.operands.a! * this.operands.b!;
    }
    devide() {
        return this.operands.a = this.operands.a! / this.operands.b!;
    }
}