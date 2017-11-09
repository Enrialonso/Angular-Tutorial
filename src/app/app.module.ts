import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component} from './error404/error404.component';
import { InicioDataBindingComponent } from './inicio-data-binding/inicio-data-binding.component';
import { DataBindingInterpolacionYPropertyBindingComponent } from './data-binding-interpolacion-y-property-binding/data-binding-interpolacion-y-property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { InicioDirectivasComponent } from './inicio-directivas/inicio-directivas.component';
import { DirectivasAtributosComponent } from './directivas-atributos/directivas-atributos.component'

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'data-binding-interpolacion-property', component: DataBindingInterpolacionYPropertyBindingComponent  },
  { path: 'event-binding', component: EventBindingComponent},
  { path: 'two-way-binding', component: TwoWayBindingComponent},
  { path: 'data-binding', component: InicioDataBindingComponent  },
  { path: 'directivas', component: InicioDirectivasComponent  },
  { path: 'directiva-atributo', component: DirectivasAtributosComponent  },
  { path: '**', component: Error404Component}
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    Error404Component,
    InicioDataBindingComponent,
    DataBindingInterpolacionYPropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InicioDirectivasComponent,
    DirectivasAtributosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
