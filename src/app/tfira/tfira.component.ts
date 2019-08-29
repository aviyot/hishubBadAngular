import { Component, OnInit } from "@angular/core";
import { HishubService } from "../hishub.service";

@Component({
  selector: "app-tfira",
  templateUrl: "./tfira.component.html",
  styleUrls: ["./tfira.component.css"]
})
export class TfiraComponent implements OnInit {
  kant: number;
  kipul: number;
  hibur: number;
  hebel: number;

  constructor(private hishubService: HishubService) {}

  ngOnInit() {
    this.kant = this.hishubService.tfiraProp.kant;
    this.kipul = this.hishubService.tfiraProp.kipulHebel;
    this.hibur = this.hishubService.tfiraProp.hibur;
    this.hebel = this.hishubService.tfiraProp.hebel;
  }

  updateTfira() {
    this.hishubService.tfiraProp.kant = this.kant;
    this.hishubService.tfiraProp.kipulHebel = this.kipul;
    this.hishubService.tfiraProp.hibur = this.hibur;
    this.hishubService.tfiraProp.hebel = this.hebel;
  }
}
