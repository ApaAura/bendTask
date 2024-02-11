import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Module1RoutingModule } from './module1/module1-routing.module';
import { Module2RoutingModule } from './module2/module2-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./module1/module1-routing.module').then(
        (m) => m.Module1RoutingModule,
      ),
  },
  {
    path: 'module2',
    loadChildren: () =>
      import('./module2/module2-routing.module').then(
        (m) => m.Module2RoutingModule,
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    Module1RoutingModule,
    Module2RoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
