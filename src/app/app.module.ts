import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputComponent } from "./components/input/input.component";
import { MaterialModule } from "./material/material.module";
import { FormsModule } from "@angular/forms";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ClientOrderComponent } from "./client-order/client-order.component";
import { SizeOrderComponent } from "./size-order/size-order.component";
import { SewingMachineComponent } from "./sewing-machine/sewing-machine.component";
import { SewingTypeComponent } from "./sewing-type/sewing-type.component";
import { FabricComponent } from "./fabric/fabric.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { CalcWidthComponent } from "./calc-width/calc-width.component";
import { CalcLengthComponent } from "./calc-length/calc-length.component";
import { ClientsComponent } from "./clients/clients.component";
import { StockComponent } from './stock/stock/stock.component';
import { AwingsComponent } from './order-type/awings/awings.component';
import { WidthComponent } from './components/width/width.component';
import { LengthComponent } from './components/length/length.component';
import { TypeGziraComponent } from './components/type-gzira/type-gzira.component';
import { PlataComponent } from './order-type/plata/plata.component';
import { VolanComponent } from './order-type/volan/volan.component';
import { NofeletComponent } from './order-type/nofelet/nofelet.component';
import { TfiraComponent } from './tfira/tfira.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ToolbarComponent,
    ClientOrderComponent,
    SizeOrderComponent,
    SewingMachineComponent,
    SewingTypeComponent,
    FabricComponent,
    MainMenuComponent,
    CalcWidthComponent,
    CalcLengthComponent,
    ClientsComponent,
    StockComponent,
    AwingsComponent,
    WidthComponent,
    LengthComponent,
    TypeGziraComponent,
    PlataComponent,
    VolanComponent,
    NofeletComponent,
    TfiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
