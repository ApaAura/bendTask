import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './components/area/area.component';

const routes: Routes = [
  {
    path: 'module2',
    children: [{ path: '', component: AreaComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module2RoutingModule {}
