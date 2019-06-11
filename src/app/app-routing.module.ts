import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientOrderComponent } from './client-order/client-order.component';
import { CalcLengthComponent } from './calc-length/calc-length.component';
import { CalcWidthComponent } from './calc-width/calc-width.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

const routes: Routes = [
  {path:'order',component:ClientOrderComponent},
  {path:'calc-length',component:CalcLengthComponent},
  {path:'calc-width',component:CalcWidthComponent},
  {path:'home',component:MainMenuComponent},
  {path:'',component:MainMenuComponent,pathMatch:'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
