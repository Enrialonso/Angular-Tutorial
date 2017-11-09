import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component} from './error404/error404.component';
import { InicioDataBindingComponent } from './inicio-data-binding/inicio-data-binding.component';
import { DataBindingInterpolacionYPropertyBindingComponent } from './data-binding-interpolacion-y-property-binding/data-binding-interpolacion-y-property-binding.component'

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'data-binding-interpolacion-property', component: DataBindingInterpolacionYPropertyBindingComponent  },
  { path: 'data-binding', component: InicioDataBindingComponent  },
  { path: '**', component: Error404Component}
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    Error404Component,
    InicioDataBindingComponent,
    DataBindingInterpolacionYPropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
