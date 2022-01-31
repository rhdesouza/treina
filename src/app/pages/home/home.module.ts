import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { HistoricoPedidosComponent } from "src/app/components/historico-pedidos/historico-pedidos.component";
import { HomeComponent } from "./home.component";
import { ModalIngredientesComponent } from "./modal-ingredientes/modal-ingredientes.component";
import { ModalMontagemHamburguerComponent } from './modal-montagem-hamburguer/modal-montagem-hamburguer.component';

@NgModule({
    declarations: [
      HomeComponent,
      ModalIngredientesComponent,
      ModalMontagemHamburguerComponent,
      HistoricoPedidosComponent
    ],
    imports: [
      MatButtonModule,
      MatIconModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      MatInputModule,
    ],
    exports: [
    ],
  })
  export class HomeModule { }