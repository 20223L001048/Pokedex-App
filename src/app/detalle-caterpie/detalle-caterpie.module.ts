import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCaterpiePageRoutingModule } from './detalle-caterpie-routing.module';

import { DetalleCaterpiePage } from './detalle-caterpie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCaterpiePageRoutingModule
  ],
  declarations: [DetalleCaterpiePage]
})
export class DetalleCaterpiePageModule {}
