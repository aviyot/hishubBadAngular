import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HishubService {
  tfiraProp = { hebel: 50, kant: 35, hibur: 25 };
  sherit: number;
  rohabimShlemim: number;

  constructor() {}

  hishubSherit(
    rohabMida: number,
    rohabBad: number,
    hibur: number,
    pice: number
  ) {
    if (pice > 0) {
      pice += hibur;
    }
    this.rohabimShlemim = Math.floor(
      (rohabMida - pice + this.tfiraProp.kant * 2 - this.tfiraProp.hibur) /
        (rohabBad - hibur)
    );
    this.sherit = rohabMida - pice + hibur -
      ((rohabBad - hibur) * this.rohabimShlemim -
        (this.tfiraProp.kant * 2 - this.tfiraProp.hibur));
    const hishubResult = {
      rohabimShlemim: this.rohabimShlemim,
      sherit: this.sherit
    };
    return hishubResult;
  }
}
