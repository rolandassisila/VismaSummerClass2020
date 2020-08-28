import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from './../components/layout/layout.module';
import { PostRelatedComponentsModule } from './../components/post-related-components/post-related-components.module';
import { LifeComponent } from './life/life.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { EditformComponent } from './editform/editform.component';

@NgModule({
  declarations: [
    LifeComponent,
    HomeComponent,
    FormComponent,
    EditformComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    PostRelatedComponentsModule,
  ],
  exports: [LifeComponent, HomeComponent, FormComponent, EditformComponent],
})
export class PagesModule {}
