import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoFormularioComponent } from './cuerpo-formulario/cuerpo-formulario.component';
import { ValidacionFormComponent } from './validacion-form/validacion-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CuerpoFormularioComponent,
    ValidacionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
