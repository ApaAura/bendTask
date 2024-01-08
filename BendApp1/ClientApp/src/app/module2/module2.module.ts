import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThingComponent } from './components/thing/thing.component';
import { AreaComponent } from './components/area/area.component';


@NgModule({
  declarations: [
    ThingComponent,
    AreaComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class Module2Module { }
