import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './directive/my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
