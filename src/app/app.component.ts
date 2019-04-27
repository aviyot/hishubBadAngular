
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
    date: { label: "Date", placeholder: "Enter Client", type: "date", inputClass:"input" },
    orderNum: { label: "OrderNum", placeholder: "Enter Client", type: "text", inputClass:"input" },
    kant  : { label: "Kant", placeholder: "Enter Data", type: "number" , inputClass:"input"},
    hibur  : { label: "Hibur", placeholder: "Enter Hibur", type: "number" , inputClass:"input"},
    hebel  : { label: "Hebel", placeholder: "Enter Heble", type: "number" , inputClass:"input"},
    tfiraType  : { label: "Type Tfrira", placeholder: "Choice Tfira", type: "select" , inputClass:"input"},
    badName : { label: "Name", placeholder: "Choice Bad", type: "text" , inputClass:"input"},
    badWidth  : { label: "Width Galil", placeholder: "", type: "number" , inputClass:"input"},
    meterRoll  : { label: "Meter In Galil", placeholder: "", type: "number" , inputClass:"input"},
    midaWidth  : { label: "Width Mida", placeholder: "Width", type: "number" , inputClass:"input"},
    midaLength : { label: "Length Mida", placeholder: "Length", type: "number" , inputClass:"input"},
    volanLength  : { label: "Length Volan", placeholder: "Length", type: "number" , inputClass:"input"},
    volanType  : { label: "Type Volan", placeholder: "Type", type: "text" , inputClass:"input"},
    sharvulLength : { label: "Length Sharvul", placeholder: "Length", type: "number" , inputClass:"input"},
  };
}
}
