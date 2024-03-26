import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSquirtlePageRoutingModule } from './detalle-squirtle-routing.module';

import { DetalleSquirtlePage } from './detalle-squirtle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSquirtlePageRoutingModule
  ],
  declarations: [DetalleSquirtlePage]
})
export class DetalleSquirtlePageModule {}
