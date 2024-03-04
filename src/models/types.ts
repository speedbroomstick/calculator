export interface ICalculator{
    operands:{
     a: number|null,
     b:number|null,
     operation:string|null
    }
     add():number;
     subtract():number;
     multiply():number;
     devide():number;
}