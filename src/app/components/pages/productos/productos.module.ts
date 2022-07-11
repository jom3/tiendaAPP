import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { MaterialModule } from '../../../modules/material.module';


@NgModule({
  declarations: [
    ProductosComponent,
    RegistrarProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule
  ]
})
export class ProductosModule { }
