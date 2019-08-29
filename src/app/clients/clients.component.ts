import { Component, OnInit } from "@angular/core";

export interface Adress {
  city: string;
  street: string;
  number: string;
}
export interface Owner {
  frisName: string;
  lastName: string;
  adress: Adress;
  tel: string;
}

export interface Clients {
  id: number;
  companyName: string;
  owner: Owner[];
  adress: Adress;
  tel: string;
}
@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})
export class ClientsComponent implements OnInit {
  clients: Clients[] = [];
  constructor() {}

  ngOnInit() {
    this.clients.push({
      id: 111,
      companyName: "hamerkaz the israel",
      owner: [],
      adress: { city: "tel-aviv", street: "levinski", number: "1" },
      tel: "03-111222333"
    });
  }
}
