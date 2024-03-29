import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ingredientes } from 'src/app/models/ingredientes';
import { StorageService } from 'src/app/services/storage.service';
import { ModalIngredientesComponent } from './modal-ingredientes/modal-ingredientes.component';
import { ModalMontagemHamburguerComponent } from './modal-montagem-hamburguer/modal-montagem-hamburguer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ingredientesList: Ingredientes[] = [
    {
      ingrediente: "Pão",
      default: true
    },
    {
      ingrediente: "Hambúrguer de Carne",
      default: true
    },
    {
      ingrediente: "Hambúrguer Vegano",
      default: true
    }
  ];

  listPedidos: string[] = []

  constructor(
    private storageService: StorageService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.storageService.setListIngredientes(this.ingredientesList);
  }

  public abrirModaIngredientes = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '30%';
    dialogConfig.data = this.ingredientesList;

    this.dialog.open(ModalIngredientesComponent, dialogConfig).afterClosed().subscribe(() => {
      this.ingredientesList = this.storageService.getListIngredientes();
    });
  }

  /*   public openIngredientes() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.width = '30%';
      dialogConfig.data = this.ingredientesList;
  
      this.dialog.open(ModalIngredientesComponent, dialogConfig).afterClosed().subscribe(() => {
        this.ingredientesList = this.storageService.getListIngredientes();
      });
    } */


  public abrirModalMontarHamburguer = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '40%';
    dialogConfig.data = this.ingredientesList;

    this.dialog.open(ModalMontagemHamburguerComponent, dialogConfig).afterClosed().subscribe(() => {
      this.ingredientesList = this.storageService.getListIngredientes();
      this.listPedidos = this.storageService.getListVenda();
    });
  }
}
