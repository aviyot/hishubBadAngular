import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "hishub-bad";
  inputData;

ngOnInit() {

 this.inputData = {
    client: { label: "Client", placeholder: "Enter Client", type: "text", inputClass:"input" },
    date  : { label: "Date", placeholder: "Enter Data", type: "date" , inputClass:"input"},

  };
}
}
