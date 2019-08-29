import { Component, OnInit, Input } from "@angular/core";
import { HishubService } from "../hishub.service";

@Component({
  selector: "app-calc-width",
  templateUrl: "./calc-width.component.html",
  styleUrls: ["./calc-width.component.css"]
})
export class CalcWidthComponent implements OnInit {
  widthMida = 0;
  widthGalil = 1200;
  widthPice = 0;
  shelemim: number;
  sherit: number;
  pice: number;
  simitriBig: number;
  simitriLittle: number;
  allSimitri: number;
  fromComp = false;
  constructor(private hishubService: HishubService) {}

  ngOnInit() {
    if (this.hishubService.fromOrder) {
      this.fromOrder(this.hishubService.orderData);
      this.getSheerit();
    }
  }

  getSheerit() {
    const result = this.hishubService.hishubSherit(
      Number(this.widthMida),
      Number(this.widthGalil),
      Number(this.widthPice)
    );

    this.shelemim = result.rohabimShlemim;
    this.sherit = result.sherit;
    this.simitriLittle = (this.sherit + this.hishubService.tfiraProp.hibur) / 2;
    this.simitriBig = (this.widthGalil + this.sherit) / 2;
    this.allSimitri =
      (this.widthGalil * this.shelemim + this.sherit) / (this.shelemim + 1);

    this.fromComp = true;
  }
  fromOrder(data) {
    this.widthMida = data.width;
  }
}
