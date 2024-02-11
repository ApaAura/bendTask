import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Module1Module } from './module1/module1.module';
import { Module2Module } from './module2/module2.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    Module1Module,
    Module2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
