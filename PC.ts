import { Computador } from "./computer";

export class PC extends Computador{
   
   private monitor : string;

    constructor(ram: number, hd: number, cpu: number, tipo: string, monitor: string) {
        super(ram, hd, cpu, tipo);
        this.monitor = monitor;
    }

    getMonitor(): string {
        return this.monitor;
    }

    setMonitor(monitor: string) {
        this.monitor = monitor;
    }

    override toString(): string {
        return `PC: Mem. RAM: ${super.getRam()}GB | CPU: ${super.getCPU()}GHz | SSD: ${super.getHD()}GB | Monitor: ${this.monitor}`;
    }

}