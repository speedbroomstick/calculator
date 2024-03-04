export interface ICalculator{
    operands:{
     a: number,
     b:number,
     operation:string
    }
     add():number;
     subtract():number;
     multiply():number;
     devide():number;
}