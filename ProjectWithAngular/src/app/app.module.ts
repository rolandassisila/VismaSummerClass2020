import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LifeComponent } from './life/life.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostFormtemplateComponent } from './components/postformtemplate/postformtemplate.component';
import { HolidaypostsComponent } from './components/holidayposts/holidayposts.component';
import { GeneralpostshomeComponent } from './components/generalpostshome/generalpostshome.component';
import { GeneralpostslifeComponent } from './components/generalpostslife/generalpostslife.component';
import { GeneralinfoComponent } from './components/generalinfo/generalinfo.component';
import { HeroComponent } from './components/hero/hero.component';
import { EditformComponent } from './editform/editform.component';
import { PostedittemplateComponent } from './components/postedittemplate/postedittemplate.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatCheckboxModule } from '@angular/material/checkbox';


import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { AllpostsComponent } from './components/allposts/allposts.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LifeComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    PostFormtemplateComponent,
    HolidaypostsComponent,
    GeneralpostshomeComponent,
    GeneralpostslifeComponent,
    GeneralinfoComponent,
    HeroComponent,
    PostComponent,
    AllpostsComponent,
    EditformComponent,
    PostedittemplateComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
