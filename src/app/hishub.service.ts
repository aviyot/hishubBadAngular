import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HishubService {
  tfiraProp = { hebel: 50, kant: 35, hibur: 25 };
  sherit: number;
  rohabimShlemim: number;
  inputData;
  hishubResult;
  pice;
  gziraOpthion = [
    "awings",
    "plata",
    "nofelet",
    "volan to awings",
    "volan without kant",
    "plata with volan",
    "awings without volan",
    "nofelet",
    "nofelet with volan",
    "plata with volan"
  ];

  constructor() {
    this.setInputData();
  }
  setInputData() {
    this.inputData = {
      client: {
        label: "Client",
        placeholder: "Enter Client",
        type: "text",
        inputClass: "input",
        value: ""
      },
      date: {
        label: "Date",
        placeholder: "Enter Client",
        type: "date",
        inputClass: "input",
        value: ""
      },
      orderNum: {
        label: "OrderNum",
        placeholder: "Enter Client",
        type: "text",
        inputClass: "input",
        value: ""
      },
      kant: {
        label: "Kant",
        placeholder: "Enter Data",
        type: "number",
        inputClass: "input",
        value: this.tfiraProp.kant
      },
      hibur: {
        label: "Hibur",
        placeholder: "Enter Hibur",
        type: "number",
        inputClass: "input",
        value: this.tfiraProp.hibur
      },
      hebel: {
        label: "Hebel",
        placeholder: "Enter Heble",
        type: "number",
        inputClass: "input",
        value: this.tfiraProp.hebel
      },
      tfiraType: {
        label: "Type Tfrira",
        placeholder: "Choice Tfira",
        type: "select",
        inputClass: "input",
        value: ""
      },
      badName: {
        label: "Name Bad",
        placeholder: "Choice Bad",
        type: "text",
        inputClass: "input",
        value: ""
      },
      badWidth: {
        label: "Width Galil",
        placeholder: "",
        type: "number",
        inputClass: "input",
        value: "1200"
      },
      meterRoll: {
        label: "Meter In Galil",
        placeholder: "",
        type: "number",
        inputClass: "input",
        value: ""
      },
      midaWidth: {
        label: "Width Mida",
        placeholder: "Width",
        type: "number",
        inputClass: "input",
        value: ""
      },
      midaLength: {
        label: "Length Mida",
        placeholder: "Length",
        type: "number",
        inputClass: "input",
        value: ""
      },
      sherit: {
        label: "Sherit",
        placeholder: "Sherit",
        type: "number",
        inputClass: "input",
        value: ""
      },
      volanLength: {
        label: "Length Volan",
        placeholder: "Length",
        type: "number",
        inputClass: "input",
        value: ""
      },
      volanType: {
        label: "Type Volan",
        placeholder: "Type",
        type: "text",
        inputClass: "input",
        value: ""
      },
      sharvulLength: {
        label: "Length Sharvul",
        placeholder: "Length",
        type: "number",
        inputClass: "input",
        value: ""
      }
    };
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

  hishubLength(): number {
    return 3650;
  }
}
