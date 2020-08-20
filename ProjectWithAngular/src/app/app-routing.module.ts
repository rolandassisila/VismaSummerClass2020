import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { LifeComponent } from './pages/life/life.component';
import { FormComponent } from './pages/form/form.component';
import { EditformComponent } from './pages/editform/editform.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'life', component: LifeComponent},
  { path: 'form', component: FormComponent},
  { path: 'edit/:id', component: EditformComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];


export const AppRoutingModule = RouterModule.forRoot(routes);