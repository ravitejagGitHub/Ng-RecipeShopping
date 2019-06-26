import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SecurityComponent } from './security/security.component';
import { AppRoutingModule } from './app-routing.module';
import { InternalizationComponent } from './internalization/internalization.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SecurityComponent,
    InternalizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
