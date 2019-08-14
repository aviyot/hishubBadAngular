import { Component, OnInit } from "@angular/core";
import { HishubService } from "../hishub.service";

@Component({
  selector: "app-calc-length",
  templateUrl: "./calc-length.component.html",
  styleUrls: ["./calc-length.component.css"]
})
export class CalcLengthComponent implements OnInit {
  width = 0;
  widthGalil = 0;
  pice = 0;
  bodyLength = 0;
  volanLength = 0;
  sharvulLength = 0;
  resultLength = 0;
  gziraOpthin: string[] = [];
  selectedOpthin = "";

  constructor(private hishubService: HishubService) {
    this.gziraOpthin = this.hishubService.gziraOpthion;
    this.selectedOpthin = this.gziraOpthin[0];
  }

  ngOnInit() {}
  calcLength() {
    const sheerit = this.hishubService.hishubSherit(
      this.width,
      this.widthGalil,
      this.pice
    );

    this.resultLength = (sheerit.rohabimShlemim * this.bodyLength) / 1000;
    //this.resultLength = this.hishubService.hishubLength();
  }
}
