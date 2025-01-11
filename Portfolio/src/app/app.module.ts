import { NgModule } from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSliderModule} from "@angular/material/slider";
import { ProjectDetailComponent } from './sections/project-detail/project-detail.component';
import { MainComponent } from './sections/main/main.component';
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectDetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatSliderModule,
    FormsModule,
    MatSnackBarModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
