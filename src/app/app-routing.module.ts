import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientOrderComponent } from "./client-order/client-order.component";
import { CalcLengthComponent } from "./calc-length/calc-length.component";
import { CalcWidthComponent } from "./calc-width/calc-width.component";
import { StockComponent } from "./stock/stock/stock.component";
import { TfiraComponent } from "./tfira/tfira.component";

const routes: Routes = [
  { path: "order", component: ClientOrderComponent },
  { path: "calc-length", component: CalcLengthComponent },
  { path: "calc-width", component: CalcWidthComponent },
  { path: "", component: CalcWidthComponent, pathMatch: "full" },
  { path: "stock", component: StockComponent },
  { path: "", component: TfiraComponent },
  { path: "", component: TfiraComponent, outlet: "tfira" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
