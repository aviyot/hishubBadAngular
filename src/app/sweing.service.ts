import { Injectable } from "@angular/core";
import { TypeSewing, TypeHem } from "./model/sewing.model";

@Injectable({
  providedIn: "root"
})
export class SweingService {
  HEM_SIZE = {
    HEM25: 25,
    HEM35: 35,
    HEM0: 0,
    MENUAL: 0
  };

  SEAM = 25;
  HEM = 30;
  TOP_HEM = 50;
  SIDE_HEM = 35;
  NONE = 0;

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

  sweingTypes: TypeSewing[];
  typesHem: TypeHem[];

  constructor() {
    this.typesHem = [
      {
        type: "HEM 35mm",
        hem: this.HEM_SIZE.HEM35
      },
      {
        type: "HEM 25mm",
        hem: this.HEM_SIZE.HEM25
      },
      {
        type: "HEM 0mm",
        hem: this.HEM_SIZE.HEM0
      },
      {
        type: "HEM Nanual",
        hem: this.HEM_SIZE.HEM0
      }
    ];

    this.sweingTypes = [
      {
        type: "Awings",
        sewing: {
          seam: this.SEAM,
          hem: this.HEM,
          topHem: this.TOP_HEM,
          bottomHem: this.TOP_HEM,
          rightHem: this.SIDE_HEM,
          leftHem: this.SIDE_HEM
        }
      },
      {
        type: "Plata",
        sewing: {
          seam: this.SEAM,
          hem: this.NONE,
          topHem: this.NONE,
          bottomHem: this.NONE,
          rightHem: this.NONE,
          leftHem: this.NONE
        }
      }
    ];
  }
}
