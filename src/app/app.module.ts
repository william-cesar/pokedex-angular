import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { PokemonListComponent } from "./components/pokemon-list/pokemon-list.component";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, PokemonListComponent],
  imports: [BrowserModule, HttpClientModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
