import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PostRelatedComponentsModule } from './../post-related-components/post-related-components.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GeneralinfoComponent } from './generalinfo/generalinfo.component';
import { GeneralpostshomeComponent } from './generalpostshome/generalpostshome.component';
import { GeneralpostslifeComponent } from './generalpostslife/generalpostslife.component';
import { HeroComponent } from './hero/hero.component';
import { HolidaypostsComponent } from './holidayposts/holidayposts.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    GeneralinfoComponent,
    GeneralpostslifeComponent,
    GeneralpostshomeComponent,
    HeroComponent,
    HolidaypostsComponent
  ],
  imports: [
    CommonModule,
    PostRelatedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    GeneralinfoComponent,
    GeneralpostslifeComponent,
    GeneralpostshomeComponent,
    HeroComponent,
    HolidaypostsComponent
  ]
})
export class LayoutModule { }
