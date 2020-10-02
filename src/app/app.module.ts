import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopoComponent } from './topo/topo.component';
import { CentroComponent } from './centro/centro.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TopoComponent, CentroComponent, RodapeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
