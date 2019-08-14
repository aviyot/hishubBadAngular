import { Component, OnInit } from "@angular/core";

export interface BadProp {
  name: string;
  width: number;
  type: string;
}

const Badim: BadProp[] = [
  { name: "R123", width: 1200, type: "Dralon" },
  { name: "Kosta7", width: 1500, type: "PVC" }
];
@Component({
  selector: "app-stock",
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.css"]
})
export class StockComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ["name", "width", "type"];
  dataSource = Badim;
  ngOnInit() {}
}
