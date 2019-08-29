import { Component, OnInit } from "@angular/core";
import { HishubService } from "src/app/hishub.service";

@Component({
  selector: "app-type-gzira",
  templateUrl: "./type-gzira.component.html",
  styleUrls: ["./type-gzira.component.css"]
})
export class TypeGziraComponent implements OnInit {
  gziraOpthin: string[] = [];
  selectedOpthin = "";

  constructor(private hishubService: HishubService) {
    this.gziraOpthin = this.hishubService.gziraOpthion;
    this.selectedOpthin = this.gziraOpthin[0];
  }
  ngOnInit() {}
}
