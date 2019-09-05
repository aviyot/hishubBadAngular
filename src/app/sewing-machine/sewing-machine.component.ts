import { Component, OnInit } from "@angular/core";
import { HishubService } from "../hishub.service";
import { SewingProp } from "../model/sewing.model";

@Component({
  selector: "app-sewing-machine",
  templateUrl: "./sewing-machine.component.html",
  styleUrls: ["./sewing-machine.component.css"]
})
export class SewingMachineComponent implements OnInit {
  sewing: SewingProp;
  constructor(private hishubservice: HishubService) {}

  ngOnInit() {
    this.sewing = {
      seam: this.hishubservice.tfiraProp.hibur,
      topHem: this.hishubservice.tfiraProp.hebel,
      bottomHem: this.hishubservice.tfiraProp.hebel,
      leftHem: this.hishubservice.tfiraProp.kant,
      rightHem: this.hishubservice.tfiraProp.kant,
      hem: 0
    };

    /*     this.sewing.seam = 25;
    this.sewing.topHem = 50;
    this.sewing.bottomHem = 50;
    this.sewing.leftHem = 35;
    this.sewing.rightHem = 35; */
  }

  changeSewing() {
    this.hishubservice.showSewing.emit(false);
    this.hishubservice.sweingUpdate.emit({
      seam: this.sewing.seam,
      topHem: this.sewing.topHem,
      bottomHem: this.sewing.bottomHem,
      leftHem: this.sewing.leftHem,
      rightHem: this.sewing.rightHem,
      hem: 0
    });
  }
}
