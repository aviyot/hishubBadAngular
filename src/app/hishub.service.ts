import { Injectable, EventEmitter } from "@angular/core";
import { SewingProp, TypeSewing } from "./model/sewing.model";
import { SweingService } from "./sweing.service";

@Injectable({
  providedIn: "root"
})
export class HishubService {
  orderData;
  fromOrder = false;
  showSewing: EventEmitter<boolean> = new EventEmitter<boolean>();
  sweingUpdate: EventEmitter<SewingProp> = new EventEmitter<SewingProp>();
  tfiraProp = { hebel: 50, kant: 35, hibur: 25, kipulHebel: 30 };
  sherit: number;
  rohabimShlemim: number;
  inputData;
  hishubResult;
  pice;
  gziraOpthion = [
    "Awings",
    "Awings without volan",
    "Plata",
    "Plata with volan",
    "Nofelet",
    "Nofelet with volan",
    "Volan to awings",
    "Volan without kant",
    "Awings otef front",
    "Meter Raz"
  ];

  constructor(private sweingService: SweingService) {}

  seam = this.sweingService.SEAM;

  hishubSherit(rohabMida: number, rohabBad: number, pice: number, hem: number) {
    this.pice = pice;
    if (pice > 0) {
      pice -= this.seam;
    }
    this.rohabimShlemim = Math.floor(
      (rohabMida - pice + hem * 2 - this.seam) / (rohabBad - this.seam)
    );
    this.sherit =
      rohabMida -
      pice +
      this.seam -
      ((rohabBad - this.seam) * this.rohabimShlemim - (hem * 2 - this.seam));

    this.hishubResult = {
      rohabimShlemim: this.rohabimShlemim,
      sherit: this.sherit
    };

    return this.hishubResult;
  }

  hishubLength(
    rohabMida: number,
    rohabBad: number,
    pice: number,
    lengthMida: number,
    hem: number
  ): number {
    const rohabimShlemim = this.hishubSherit(rohabMida, rohabBad, pice, hem)
      .rohabimShlemim;
    const totlaLength = (rohabimShlemim + 1) * lengthMida;
    return totlaLength / 1000;
  }
}
