import { Component, OnInit } from "@angular/core";
import { HishubService } from "../hishub.service";
import { SewingProp, TypeSewing } from "../model/sewing.model";
import { SweingService } from "../sweing.service";

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
  showSewing = false;
  sub: any;
  sewingInit: TypeSewing;

  constructor(
    private hishubService: HishubService,
    private sweingService: SweingService
  ) {
    this.gziraOpthin = this.hishubService.gziraOpthion;
    this.selectedOpthin = this.gziraOpthin[0];
  }

  ngOnInit() {
    this.sewingInit = this.sweingService.sweingTypes.find(obj => {
      return obj.type === this.selectedOpthin;
    });

    this.hishubService.sweingUpdate.subscribe(item => {
      this.hishubService.tfiraProp.hibur = item.seam;
      this.hishubService.tfiraProp.hebel = item.topHem;
      this.hishubService.tfiraProp.hebel = item.bottomHem;
      this.hishubService.tfiraProp.kant = item.leftHem;
      this.hishubService.tfiraProp.kant = item.rightHem;
      this.dfineGzira(this.selectedOpthin);
    });
    this.selectedOpthin = this.hishubService.gziraOpthion[0];
    if (this.hishubService.fromOrder) {
      this.fromOrder(this.hishubService.orderData);
      this.calcLength();
    }
    this.dfineGzira(this.selectedOpthin);
    this.sub = this.hishubService.showSewing.subscribe(item => {
      this.showSewing = item;
    });
  }
  showSewingHandler() {
    if (this.showSewing) {
      this.hishubService.showSewing.emit(false);
    } else {
      this.hishubService.showSewing.emit(true);
    }
  }
  calcLength(): number[] {
    this.resultLength = this.hishubService.hishubLength(
      this.width,
      this.widthGalil,
      this.pice,
      this.bodyLength + this.addtfira,
      this.sewingInit.sewing.leftHem
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
        this.sewingInit = {
          type: gziraType,
          sewing: {
            seam: 25,
            topHem: 50,
            bottomHem: 50,
            leftHem: 35,
            rightHem: 35,
            hem: 30
          }
        };
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
