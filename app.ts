import { FabricaComp } from "./fabrica";
import { Servidor } from "./server";
import { PC } from "./PC";


let servidorSoftex  =  FabricaComp.createComp(32, 1000, 4.8, "servidor");

(servidorSoftex as Servidor).setSO("CentOS");
(servidorSoftex as Servidor).setSistemaRaid("RAID 1");

let pcSoftex = FabricaComp.createComp(16, 512, 3.2, "pc");
(pcSoftex as PC).setMonitor("LG 24UHD");

if (servidorSoftex && pcSoftex){
    console.log(servidorSoftex.toString()); 
    console.log(pcSoftex.toString());
}

