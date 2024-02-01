import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaComponent } from './components/area/area.component';
import { ThingComponent } from './components/thing/thing.component';
import { SortByAreaComponent } from './components/sort-by-area/sort-by-area.component';
import { AreaGroupComponent } from './components/area-group/area-group.component';


@NgModule({
  declarations: [
    AreaComponent,
    ThingComponent,
    SortByAreaComponent,
    AreaGroupComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class Module1Module { }