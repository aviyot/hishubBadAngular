import { Component, OnInit } from '@angular/core';
import { HishubService } from '../hishub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  inputData;


    constructor(private hishubService: HishubService,
      private router: Router) {
      //console.log(hishubService.hishubSherit(3480,1200,25,0));
    }


  ngOnInit() {

    const tfiraProp = this.hishubService.tfiraProp;
    this.inputData = {
      client: {
        label: "Client",
        placeholder: "Enter Client",
        type: "text",
        inputClass: "input",
        value: ""
      },
      date: {
        label: "Date",
        placeholder: "Enter Client",
        type: "date",
        inputClass: "input",
        value: ""
      },
      orderNum: {
        label: "OrderNum",
        placeholder: "Enter Client",
        type: "text",
        inputClass: "input",
        value: ""
      },
      kant: {
        label: "Kant",
        placeholder: "Enter Data",
        type: "number",
        inputClass: "input",
        value: tfiraProp.kant
      },
      hibur: {
        label: "Hibur",
        placeholder: "Enter Hibur",
        type: "number",
        inputClass: "input",
        value: tfiraProp.hibur
      },
      hebel: {
        label: "Hebel",
        placeholder: "Enter Heble",
        type: "number",
        inputClass: "input",
        value: tfiraProp.hebel
      },
      tfiraType: {
        label: "Type Tfrira",
        placeholder: "Choice Tfira",
        type: "select",
        inputClass: "input",
        value: ""
      },
      badName: {
        label: "Name Bad",
        placeholder: "Choice Bad",
        type: "text",
        inputClass: "input",
        value: ""
      },
      badWidth: {
        label: "Width Galil",
        placeholder: "",
        type: "number",
        inputClass: "input",
        value: "1200"
      },
      meterRoll: {
        label: "Meter In Galil",
        placeholder: "",
        type: "number",
        inputClass: "input",
        value: ""
      },
      midaWidth: {
        label: "Width Mida",
        placeholder: "Width",
        type: "number",
        inputClass: "input",
        value: ""
      },
      midaLength: {
        label: "Length Mida",
        placeholder: "Length",
        type: "number",
        inputClass: "input",
        value: ""
      },
      sherit: {
        label: "Sherit",
        placeholder: "Sherit",
        type: "number",
        inputClass: "input",
        value: ""
      },
      volanLength: {
        label: "Length Volan",
        placeholder: "Length",
        type: "number",
        inputClass: "input",
        value: ""
      },
      volanType: {
        label: "Type Volan",
        placeholder: "Type",
        type: "text",
        inputClass: "input",
        value: ""
      },
      sharvulLength: {
        label: "Length Sharvul",
        placeholder: "Length",
        type: "number",
        inputClass: "input",
        value: ""
      }
    };
  }

  getSheerit() {
    const result = this.hishubService.hishubSherit(
      Number(this.inputData.midaWidth.value),
      Number(this.inputData.badWidth.value),
      Number(this.inputData.hibur.value),
      Number(this.inputData.sherit.value)
    );
    console.log(result);
    this.router.navigate(['calc-width']);
  }
  }


