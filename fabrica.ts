import { Computador } from "./computer";
import { Servidor } from "./server";
import { PC } from "./PC"

export class FabricaComp{
    static createComp(ram: number, hd: number, cpu: number, tipo: string) : Computador | null {
        if(tipo.toLowerCase() == "servidor"){
            return new Servidor(ram, hd, cpu, tipo, "RAID 0", "CentOS");
        }else if(tipo.toLowerCase() == "pc"){
            return new PC(ram, hd, cpu, tipo, "Monitor");
        }
        return null;
    }
}