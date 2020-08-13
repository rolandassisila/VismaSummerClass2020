import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { BodyComponent } from './body/body.component';
import { LifeComponent } from './life/life.component';

const routes: Routes = [
  { path: '', redirectTo: './body', pathMatch: 'full'},
  { path: 'body', component: BodyComponent},
  { path: 'form', component: FormComponent},
  { path: 'life', component: LifeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


