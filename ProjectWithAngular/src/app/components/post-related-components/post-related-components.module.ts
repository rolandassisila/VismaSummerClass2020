import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AllpostsComponent } from './allposts/allposts.component';
import { PostComponent } from './post/post.component';
import { PostedittemplateComponent } from './postedittemplate/postedittemplate.component';
import { PostFormtemplateComponent } from './postformtemplate/postformtemplate.component';

import { PostEffects } from './../../store/post.effects';
import { postReducer } from './../../store/post.reducer';
import { postStateFeatureKey } from './../../app-state/post.state';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

const postRoutes: Routes = [{ path: '', component: PostComponent }];

@NgModule({
  declarations: [
    AllpostsComponent,
    PostComponent,
    PostedittemplateComponent,
    PostFormtemplateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(postStateFeatureKey, postReducer),
    EffectsModule.forFeature([PostEffects]),
  ],
  exports: [
    AllpostsComponent,
    PostComponent,
    PostedittemplateComponent,
    PostFormtemplateComponent,
  ],
})
export class PostRelatedComponentsModule {}
