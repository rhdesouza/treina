import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalSucessComponent } from './components/modal-sucess/modal-sucess.component';
import { HomeComponent } from './pages/home/home.component';
import { MontagemHamburguerComponent } from './pages/montagem-hamburguer/montagem-hamburguer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HistoricoPedidosComponent } from './components/historico-pedidos/historico-pedidos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { ModalIngredientesComponent } from './pages/home/modal-ingredientes/modal-ingredientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MontagemHamburguerComponent,
    ModalSucessComponent,
    ModalIngredientesComponent,
    PageNotFoundComponent,
    HistoricoPedidosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
