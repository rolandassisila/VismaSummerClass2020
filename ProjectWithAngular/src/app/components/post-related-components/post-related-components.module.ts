import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AllpostsComponent } from './allposts/allposts.component';
import { PostComponent } from './post/post.component';
import { PostedittemplateComponent } from './postedittemplate/postedittemplate.component';
import { PostFormtemplateComponent } from './postformtemplate/postformtemplate.component';


@NgModule({
  declarations: [
    AllpostsComponent,
    PostComponent,
    PostedittemplateComponent,
    PostFormtemplateComponent
   ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AllpostsComponent,
    PostComponent,
    PostedittemplateComponent,
    PostFormtemplateComponent
  ]
})
export class PostRelatedComponentsModule { }
