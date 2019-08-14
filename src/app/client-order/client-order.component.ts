import { Component, OnInit } from "@angular/core";
import { HishubService } from "../hishub.service";

@Component({
  selector: "app-client-order",
  templateUrl: "./client-order.component.html",
  styleUrls: ["./client-order.component.css"]
})
export class ClientOrderComponent implements OnInit {
  gziraTypes: string[] = [];
  constructor(private hishubService: HishubService) {}

  ngOnInit() {
    this.gziraTypes = this.hishubService.gziraOpthion;
  }
}
