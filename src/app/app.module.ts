import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ClientOrderComponent } from './client-order/client-order.component';
import { SizeOrderComponent } from './size-order/size-order.component';
import { SewingMachineComponent } from './sewing-machine/sewing-machine.component';
import { SewingTypeComponent } from './sewing-type/sewing-type.component';
import { FabricComponent } from './fabric/fabric.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ToolbarComponent,
    ClientOrderComponent,
    SizeOrderComponent,
    SewingMachineComponent,
    SewingTypeComponent,
    FabricComponent
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
export class AppModule { }
