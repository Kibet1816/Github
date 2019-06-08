import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchDisplayComponent } from './search-display/search-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
