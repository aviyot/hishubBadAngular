import { Component, OnInit } from "@angular/core";
import { HishubService } from "../hishub.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-calc-length",
  templateUrl: "./calc-length.component.html",
  styleUrls: ["./calc-length.component.css"]
})
export class CalcLengthComponent implements OnInit {
  width = 4070;
  widthGalil = 1200;
  pice = 0;
  bodyLength = 3250;
  volanLength = 250;
  sharvulLength = 100;
  resultLength = 0;
  gziraOpthin: string[] = [];
  selectedOpthin = "";
  lengthes: number[] = [];
  haveVolan = false;
  haveSharvol = false;
  addtfira = 0;

  constructor(private hishubService: HishubService) {
    this.gziraOpthin = this.hishubService.gziraOpthion;
    this.selectedOpthin = this.gziraOpthin[0];
  }

  ngOnInit() {
    this.selectedOpthin = this.hishubService.gziraOpthion[0];
    if (this.hishubService.fromOrder) {
      this.fromOrder(this.hishubService.orderData);
      this.calcLength();
    }
    this.dfineGzira(this.selectedOpthin);
  }
  calcLength(): number[] {
    this.resultLength = this.hishubService.hishubLength(
      this.width,
      this.widthGalil,
      this.pice,
      this.bodyLength + this.addtfira
    );
    this.lengthes.push(this.resultLength);
    return this.lengthes;
  }

  fromOrder(data) {
    this.bodyLength = data.length;
    this.width = data.width;
    this.volanLength = data.volanLength;
    this.sharvulLength = data.sharvulLength;
    this.selectedOpthin = data.selectedOpthion;
  }
  onSelectionChange() {
    this.dfineGzira(this.selectedOpthin);
  }

  dfineGzira(gziraType): any {
    switch (gziraType) {
      //awings with volan
      case this.gziraOpthin[0]: {
        this.addtfira =
          this.hishubService.tfiraProp.hebel * 3 + this.volanLength;
        this.haveVolan = true;
        this.haveSharvol = false;
        break;
      }

      case this.gziraOpthin[1]: {
        //awings without volan
        this.addtfira = this.hishubService.tfiraProp.hebel * 2;
        this.haveVolan = false;
        this.haveSharvol = false;
        break;
      }
      case this.gziraOpthin[2]: {
        //plata
        this.addtfira = 0;
        this.haveVolan = false;
        this.haveSharvol = false;
        break;
      }

      case this.gziraOpthin[3]: {
        //plata with volan
        this.addtfira = this.volanLength;
        this.haveVolan = true;
        this.haveSharvol = false;
        break;
      }
      case this.gziraOpthin[4]: {
        //nofelet without volan
        console.log(this.sharvulLength);
        this.addtfira =
          this.hishubService.tfiraProp.hebel +
          this.hishubService.tfiraProp.kipulHebel +
          this.sharvulLength;
        console.log(this.addtfira);
        this.haveVolan = false;
        this.haveSharvol = true;
        break;
      }
      case this.gziraOpthin[5]: {
        //nofelet with vaolan
        this.addtfira =
          this.hishubService.tfiraProp.hebel * 2 +
          this.hishubService.tfiraProp.kipulHebel +
          this.sharvulLength +
          this.volanLength;
        this.haveVolan = true;
        this.haveSharvol = true;
        break;
      }
      case this.gziraOpthin[6]: {
        //volan to awings
        this.addtfira = this.hishubService.tfiraProp.hebel;
        this.haveVolan = false;
        this.haveSharvol = false;
        break;
      }
      case this.gziraOpthin[7]: {
        //volan without hebel
        this.addtfira = 0;
        this.haveVolan = false;
        this.haveSharvol = false;
        break;
      }
      case this.gziraOpthin[8]: {
        //ofetFront
        this.addtfira =
          this.hishubService.tfiraProp.hebel * 2 +
          this.hishubService.tfiraProp.kipulHebel +
          this.volanLength;
        this.haveVolan = true;
        this.haveSharvol = false;
        break;
      }
      case this.gziraOpthin[9]: {
        //meterRaz
        this.addtfira = 0;
        this.haveVolan = false;
        this.haveSharvol = false;
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }
}
