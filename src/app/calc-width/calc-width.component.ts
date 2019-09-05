import { Component, OnInit, Input } from "@angular/core";
import { HishubService } from "../hishub.service";
import { TypeSewing, TypeHem } from "../model/sewing.model";
import { SweingService } from "../sweing.service";

@Component({
  selector: "app-calc-width",
  templateUrl: "./calc-width.component.html",
  styleUrls: ["./calc-width.component.css"]
})
export class CalcWidthComponent implements OnInit {
  widthMida = 0;
  widthGalil = 1200;
  widthPice = 0;
  sherit: number;
  pice: number;
  shelemim: number;
  simitriBig: number;
  simitriLittle: number;
  allSimitri: number;

  fromComp = false;
  gziraOpthin;
  selectedOpthin;
  sewingInit: number;
  hemSewings: TypeHem[];
  selectedHemSewing: string;

  constructor(
    private hishubService: HishubService,
    private sweingService: SweingService
  ) {}

  ngOnInit() {
    //this.gziraOpthin = this.hishubService.gziraOpthion;
    this.hemSewings = this.sweingService.typesHem;
    //this.selectedOpthin = this.gziraOpthin[0];
    this.selectedHemSewing = this.hemSewings[0].type;

    this.sewingInit = this.hemSewings[0].hem;
    /* this.sewingInit = this.sweingService.sweingTypes.find(obj => {
      return obj.type === this.selectedOpthin;
    }); */

    if (this.hishubService.fromOrder) {
      this.fromOrder(this.hishubService.orderData);
      this.getSheerit();
    }
  }

  onSelectionChange() {
    this.sewingInit = this.hemSewings.find(obj => {
      return obj.type === this.selectedHemSewing;
    }).hem;

    /* this.sewingInit = this.sweingService.sweingTypes.find(obj => {
      return obj.type === this.selectedOpthin;
    }); */
  }
  getSheerit() {
    const hem = this.sewingInit;

    const result = this.hishubService.hishubSherit(
      Number(this.widthMida),
      Number(this.widthGalil),
      Number(this.widthPice),
      this.sewingInit
    );

    this.shelemim = result.rohabimShlemim;
    this.sherit = result.sherit;
    this.simitriLittle = (this.sherit + hem) / 2;
    this.simitriBig = (this.widthGalil + this.sherit) / 2;
    this.allSimitri =
      (this.widthGalil * this.shelemim + this.sherit) / (this.shelemim + 1);

    this.fromComp = true;
  }

  fromOrder(data) {
    this.widthMida = data.width;
  }
}
