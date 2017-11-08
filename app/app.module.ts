import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NameComponent } from './names/name.component';
import { NavbarComponent } from './nav/nav.component';

import { NameService } from './names/name.service';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule
                   ],
  declarations: [ AppComponent,
                          NameComponent,
                          NavbarComponent
                          ],
  providers: [ NameService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }