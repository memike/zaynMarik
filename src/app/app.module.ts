import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '../core/shared.module';
import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule, Routes } from '@angular/router';

// const appRoutes: Routes = [
//   { path: 'first-page', component: FirstPageComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(appRoutes),
    LayoutModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
