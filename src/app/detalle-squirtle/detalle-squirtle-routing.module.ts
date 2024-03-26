import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSquirtlePage } from './detalle-squirtle.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleSquirtlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSquirtlePageRoutingModule {}
