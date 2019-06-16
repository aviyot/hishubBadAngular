import { Component, OnInit, Input } from "@angular/core";
import { HishubService } from "../hishub.service";

@Component({
  selector: "app-calc-width",
  templateUrl: "./calc-width.component.html",
  styleUrls: ["./calc-width.component.css"]
})
export class CalcWidthComponent implements OnInit {
  @Input() inputData;
  sheerit: number;
  shelemim: number;
  pice: number;
  sherit: number;
  simitriBig: number;
  simitriLittle: number;
  allSimitri: number;
  fromComp = false;
  constructor(private hishubService: HishubService) {}

  initData() {
    this.inputData = this.hishubService.inputData;
    this.sheerit = this.hishubService.sherit;
    this.shelemim = this.hishubService.rohabimShlemim;
    this.sherit = this.hishubService.sherit;
    this.pice = this.hishubService.pice;
    this.simitriLittle = (this.sherit + this.hishubService.tfiraProp.hibur) / 2;
    this.simitriBig = (Number(this.inputData.badWidth.value) + this.sherit) / 2;
    this.allSimitri =
      (Number(this.inputData.midaWidth.value) + this.sherit) /
      (this.shelemim + 1);
  }
  ngOnInit() {
    this.initData();
  }

  getSheerit() {
    this.hishubService.hishubSherit(
      Number(this.inputData.midaWidth.value),
      Number(this.inputData.badWidth.value),
      Number(this.inputData.sherit.value)
    );
    this.fromComp = true;

    this.initData();
  }
}
