import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCaterpiePage } from './detalle-caterpie.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCaterpiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCaterpiePageRoutingModule {}
