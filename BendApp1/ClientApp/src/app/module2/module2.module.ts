import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThingComponent } from './components/thing/thing.component';
import { AreaComponent } from './components/area/area.component';
import { AreaGroupComponent } from './components/area-group/area-group.component';
import { SortByAreaComponent } from './components/sort-by-area/sort-by-area.component';


@NgModule({
  declarations: [
    ThingComponent,
    AreaComponent,
    AreaGroupComponent,
    SortByAreaComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class Module2Module { }
