import { Component, OnInit } from "@angular/core";
import { BadService, BadProp } from "src/app/bad.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-stock",
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.css"]
})
export class StockComponent implements OnInit {
  constructor(private badService: BadService,
    private router : Router) {}
  displayedColumns: string[] = ["name", "width", "type"];
  dataSource = this.badService.Badim;
  ngOnInit() {}
  selectBad(selectedBad) {
    this.badService.selectedBad = selectedBad.name;
    this.router.navigate(['order']);
  }
}
