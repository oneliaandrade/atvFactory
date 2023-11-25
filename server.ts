import { Computador } from "./computer";

export class Servidor extends Computador{
    private sistemaRaid : string;
    private so : string;

    constructor(ram: number, hd: number, cpu: number, tipo: string, sistemaRaid: string, so: string) {
        super(ram, hd, cpu, tipo);
        this.sistemaRaid = sistemaRaid;
        this.so = so;
    }

    getSistemaRaid(): string {
        return this.sistemaRaid;
    }

    getSO(): string {
        return this.so;
    }

    setSO(so: string): void{
        this.so = so;
    }

    setSistemaRaid(sistemaRaid: string) {
        this.sistemaRaid = sistemaRaid;
    }


    toString(): string {
        return `Servidor: Mem. RAM: ${super.getRam()}GB | CPU: ${super.getCPU()}GHz | SSD: ${super.getHD()}GB | Sistema Operacional: ${this.so} | Sistema Raid: ${this.sistemaRaid}`;
    }
}