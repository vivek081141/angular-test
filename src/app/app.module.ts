import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataBindinggComponent } from './data-bindingg/data-bindingg.component';
import { PrimaryComponent } from './primary/primary.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { FormsModule }   from '@angular/forms';
import { UserComponent } from './user.component'; // <-- NgModel lives here

import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './primary/dummy.component';

const appRoutes: Routes = [
  { path: 'user', component: UserComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    DataBindinggComponent,
    PrimaryComponent,
    TwoWayDatabindingComponent,
    UserComponent,
    DummyComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
