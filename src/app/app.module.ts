import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { MapEditComponent } from './components/map/map-edit.component';

@NgModule({
  entryComponents: [
    MapEditComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    MapEditComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbfcDFSAzAYM6HsI_m0nU9MgjJSvWyISA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
