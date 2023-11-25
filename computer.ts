import { Produtos } from "./produtos";

export abstract class Computador implements Produtos {
    private ram : number;
    private hd : number;
    private type : string;
    private cpu : number;

    constructor (ram: number, hd: number, cpu: number, type: string) {
        this.ram = ram;
        this.cpu = cpu;
        this.hd = hd;
        this.type = type;
    }

    getCPU(): number {
        return this.cpu;
    }

    getRam(): number {
        return this.ram;
    }

    getHD(): number {
        return this.hd;
    }

    getType(): string {
        return this.type;
    }


    toString(): string {
        return `Computador Tipo: ${this.type} | Mem. RAM: ${this.ram} | CPU: ${this.cpu} | HD': ${this.hd}`; 
    
    }
}