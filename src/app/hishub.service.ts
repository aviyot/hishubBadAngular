import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HishubService {
  tfiraProp = { hebel: 50 ,
                kant: 35,
                hibur: 25};
  sherit:number;
  rohabimShlemim:number;

  constructor() {}

  hishubSherit(rohabMida: number, rohabBad: number, hibur: number, pice: number) {

    this.rohabimShlemim = ( rohabMida + this.tfiraProp.kant*2 - this.tfiraProp.hibur ) / ( rohabBad - hibur );
    this.sherit =  rohabMida + hibur - (rohabBad- hibur)*this.rohabimShlemim;
    const hishubResult  = {rohabimShlemim :this.rohabimShlemim ,sherit:this.sherit};
    return  hishubResult;
    }

}
