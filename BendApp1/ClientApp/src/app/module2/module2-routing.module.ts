import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortByAreaComponent } from './components/sort-by-area/sort-by-area.component';

const routes: Routes = [
  {
    path: 'module2',
    children: [{ path: '', component: SortByAreaComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module2RoutingModule {}
