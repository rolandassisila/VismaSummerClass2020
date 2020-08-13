import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LifeComponent } from './life/life.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainbodyComponent } from './components/mainbody/mainbody.component';
import { LifebodyComponent } from './components/lifebody/lifebody.component';
import { FormtemplateComponent } from './components/formtemplate/formtemplate.component';
import { HolidaypostsComponent } from './components/holidayposts/holidayposts.component';
import { GeneralpostshomeComponent } from './components/generalpostshome/generalpostshome.component';
import { GeneralpostslifeComponent } from './components/generalpostslife/generalpostslife.component';
import { GeneralinfoComponent } from './components/generalinfo/generalinfo.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LifeComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    MainbodyComponent,
    LifebodyComponent,
    FormtemplateComponent,
    HolidaypostsComponent,
    GeneralpostshomeComponent,
    GeneralpostslifeComponent,
    GeneralinfoComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
