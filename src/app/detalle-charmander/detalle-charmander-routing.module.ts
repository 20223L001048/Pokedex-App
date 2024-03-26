import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCharmanderPage } from './detalle-charmander.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCharmanderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCharmanderPageRoutingModule {}
