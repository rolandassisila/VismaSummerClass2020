import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './components/layout/layout.module';

// import { HomeComponent } from './pages/home/home.component';
// import { LifeComponent } from './pages/life/life.component';
// import { FormComponent } from './pages/form/form.component';
// import { HeaderComponent } from './components/layout/header/header.component';
// import { FooterComponent } from './components/layout/footer/footer.component';
// import { PostFormtemplateComponent } from './components/post-related-components/postformtemplate/postformtemplate.component';
// import { HolidaypostsComponent } from './components/layout/holidayposts/holidayposts.component';
// import { GeneralpostshomeComponent } from './components/layout/generalpostshome/generalpostshome.component';
// import { GeneralpostslifeComponent } from './components/layout/generalpostslife/generalpostslife.component';
// import { GeneralinfoComponent } from './components/layout/generalinfo/generalinfo.component';
// import { HeroComponent } from './components/layout/hero/hero.component';
// import { EditformComponent } from './pages/editform/editform.component';
// import { PostedittemplateComponent } from './components/post-related-components/postedittemplate/postedittemplate.component';
// import { PostComponent } from './components/post-related-components/post/post.component';
// import { AllpostsComponent } from './components/post-related-components/allposts/allposts.component';




@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    PagesModule,
    LayoutModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
