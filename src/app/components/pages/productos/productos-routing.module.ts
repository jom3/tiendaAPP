import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';

const routes: Routes = [
  {path:'', component:ProductosComponent},
  {path:'registrarProducto', component:RegistrarProductoComponent},
  {path:'modificarProducto/:id', component:RegistrarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
