import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.componen';
import { FooterComponent } from './footer/footer.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClientesComponent } from './components/clientes/clientes.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'clientes' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClienteComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
