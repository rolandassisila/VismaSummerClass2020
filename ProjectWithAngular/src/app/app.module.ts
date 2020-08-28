import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appReducers } from './store/app.reducer';
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './components/layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
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
    RouterModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
