import { Injectable } from "@angular/core";
import { DataType } from "./InputData/input-data";
import { NgForm } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class HishubService {
  orderData;
  fromOrder = false;
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

  constructor() {
    this.setInputData();
  }
  setInputData() {
    this.inputData = DataType;
  }
  hishubSherit(rohabMida: number, rohabBad: number, pice: number) {
    this.pice = pice;
    if (pice > 0) {
      pice -= this.tfiraProp.hibur;
    }
    this.rohabimShlemim = Math.floor(
      (rohabMida - pice + this.tfiraProp.kant * 2 - this.tfiraProp.hibur) /
        (rohabBad - this.tfiraProp.hibur)
    );
    this.sherit =
      rohabMida -
      pice +
      this.tfiraProp.hibur -
      ((rohabBad - this.tfiraProp.hibur) * this.rohabimShlemim -
        (this.tfiraProp.kant * 2 - this.tfiraProp.hibur));

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
    lengthMida: number
  ): number {
    const rohabimShlemim = this.hishubSherit(rohabMida, rohabBad, pice)
      .rohabimShlemim;
    const totlaLength = (rohabimShlemim + 1) * lengthMida;
    return totlaLength / 1000;
  }
}
