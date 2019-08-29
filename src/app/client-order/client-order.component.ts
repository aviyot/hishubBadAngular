import { Component, OnInit } from "@angular/core";
import { HishubService } from "../hishub.service";
import { BadService } from "../bad.service";
import { BadProp } from "../bad.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-client-order",
  templateUrl: "./client-order.component.html",
  styleUrls: ["./client-order.component.css"]
})
export class ClientOrderComponent implements OnInit {
  client: string;
  date: Date;
  orderNumber: number;
  gziraOpthin: string[] = [];
  selectedOpthin = "";
  length = 0;
  width = 0;
  volan = 0;
  sharvul = 0;
  badim: BadProp[] = [];
  selectedBad = "";
  haveVolan = false;
  haveSharvol = false;

  constructor(
    private hishubService: HishubService,
    public badService: BadService,
    private router: Router
  ) {}
  ngOnInit() {
    this.gziraOpthin = this.hishubService.gziraOpthion;
    this.selectedOpthin = this.gziraOpthin[0];
    this.badim = this.badService.Badim;
    this.selectedBad = this.badService.selectedBad;
    this.selectedBad = this.badim[0].name;
    this.dfineGzira(this.selectedOpthin);
  }

  goToBadim() {
    this.router.navigate(["stock"]);
    this.badService.selectedBad = this.selectedBad;
  }

  calcPice(f: NgForm) {
    this.hishubService.fromOrder = true;
    this.hishubService.orderData = f.value;
    this.router.navigate(["calc-width"]);
  }

  calcLength(f: NgForm) {
    this.hishubService.fromOrder = true;
    this.hishubService.orderData = f.value;
    this.router.navigate(["calc-length"]);
  }

  sendData(f: NgForm) {
    console.log(f);
    this.hishubService.orderData = f.value;
    console.log(this.hishubService.orderData);
    this.calcLength(f);
  }
  onSelectionChange() {
    this.dfineGzira(this.selectedOpthin);
  }
  dfineGzira(gziraType): any {
    switch (gziraType) {
      //awings with volan
      case this.gziraOpthin[0]: {
        this.haveVolan = true;
        this.haveSharvol = false;
        break;
      }

      case this.gziraOpthin[1]: {
        //awings without volan
        this.haveVolan = false;
        this.haveSharvol = false;
        break;
      }
      case this.gziraOpthin[2]: {
        //plata
        this.haveVolan = false;
        this.haveSharvol = false;
        break;
      }

      case this.gziraOpthin[3]: {
        //plata with volan
        this.haveVolan = true;
        this.haveSharvol = false;
        break;
      }
      case this.gziraOpthin[4]: {
        //nofelet without volan
        this.haveVolan = false;
        this.haveSharvol = true;
        break;
      }
      case this.gziraOpthin[5]: {
        this.haveVolan = true;
        this.haveSharvol = true;
        break;
      }
      case this.gziraOpthin[6]: {
        //volan to awings
        this.haveVolan = false;
        this.haveSharvol = false;
        break;
      }
      case this.gziraOpthin[7]: {
        //volan without hebel
        this.haveVolan = false;
        this.haveSharvol = false;
        break;
      }
      case this.gziraOpthin[8]: {
        //ofetFront
        this.haveVolan = true;
        this.haveSharvol = false;
        break;
      }
      case this.gziraOpthin[9]: {
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
