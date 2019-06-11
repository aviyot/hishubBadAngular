import { Component, OnInit } from "@angular/core";
import { HishubService } from "./hishub.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  inputData;
  constructor(private hishubService: HishubService,
    private router: Router) {
    //console.log(hishubService.hishubSherit(3480,1200,25,0));
  }
  ngOnInit() {

}
}
