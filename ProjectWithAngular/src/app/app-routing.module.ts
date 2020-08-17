import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LifeComponent } from './life/life.component';
import { FormComponent } from './form/form.component';
import { EditformComponent } from './editform/editform.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'life', component: LifeComponent},
  { path: 'form', component: FormComponent},
  { path: 'edit/:id', component: EditformComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];


export const AppRoutingModule = RouterModule.forRoot(routes);
