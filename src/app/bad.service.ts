import { Injectable } from "@angular/core";

export interface BadProp {
  name: string;
  width: number;
  type: string;
}
/*
Fabric
Material
*/
@Injectable({
  providedIn: "root"
})
export class BadService {
  selectedBad = "";
  Badim: BadProp[] = [
    { name: "R123", width: 1200, type: "Dralon" },
    { name: "Kosta7", width: 1500, type: "PVC" }
  ];
  constructor() {}

  setSelectBad() {
    this.selectedBad = this.Badim[0].name;
  }
  intializeBadData() {}
}
