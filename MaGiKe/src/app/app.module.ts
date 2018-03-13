import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MangaCardComponent } from './manga/manga-card/manga-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MangaCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
