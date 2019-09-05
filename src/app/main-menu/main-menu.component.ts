import { Component, OnInit } from "@angular/core";
import { HishubService } from "../hishub.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.css"]
})
export class MainMenuComponent implements OnInit {
  inputData;

  constructor(private hishubService: HishubService, private router: Router) {
    //console.log(hishubService.hishubSherit(3480,1200,25,0));
  }

  ngOnInit() {
    this.inputData = this.hishubService.inputData;
  }

  getSheerit() {
 
    this.router.navigate(["calc-width"]);
  }
}
