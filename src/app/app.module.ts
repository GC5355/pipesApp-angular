import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from "./shared/shared.module";

// configuracion del locale de la app (para el cambio de idomas)
import localeEsUY from '@angular/common/locales/es-UY';
import localeFrCA from '@angular/common/locales/fr-CA';
import {registerLocaleData} from '@angular/common'

registerLocaleData( localeEsUY );
registerLocaleData( localeFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule

],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-UY' // 'fr-CA' para cambiar a francés canadiense
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
