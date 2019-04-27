
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
    client: { label: "Client", placeholder: "Enter Client", type: "text", inputClass:"input"  ,value:"" },
    date: { label: "Date", placeholder: "Enter Client", type: "date", inputClass:"input"  ,value:""},
    orderNum: { label: "OrderNum", placeholder: "Enter Client", type: "text", inputClass:"input"  ,value:""},
    kant  : { label: "Kant", placeholder: "Enter Data", type: "number" , inputClass:"input"  ,value:""},
    hibur  : { label: "Hibur", placeholder: "Enter Hibur", type: "number" , inputClass:"input"  ,value:""},
    hebel  : { label: "Hebel", placeholder: "Enter Heble", type: "number" , inputClass:"input"  ,value:""},
    tfiraType  : { label: "Type Tfrira", placeholder: "Choice Tfira", type: "select" , inputClass:"input"  ,value:""},
    badName : { label: "Name Bad", placeholder: "Choice Bad", type: "text" , inputClass:"input"  ,value:""},
    badWidth  : { label: "Width Galil", placeholder: "", type: "number" , inputClass:"input"  ,value:"1200"},
    meterRoll  : { label: "Meter In Galil", placeholder: "", type: "number" , inputClass:"input"  ,value:""},
    midaWidth  : { label: "Width Mida", placeholder: "Width", type: "number" , inputClass:"input"  ,value:""},
    midaLength : { label: "Length Mida", placeholder: "Length", type: "number" , inputClass:"input"  ,value:""},
    volanLength  : { label: "Length Volan", placeholder: "Length", type: "number" , inputClass:"input"  ,value:""},
    volanType  : { label: "Type Volan", placeholder: "Type", type: "text" , inputClass:"input"  ,value:""},
    sharvulLength : { label: "Length Sharvul", placeholder: "Length", type: "number" , inputClass:"input" ,value:""}
  };
}
}
