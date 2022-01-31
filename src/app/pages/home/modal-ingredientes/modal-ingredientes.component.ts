import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ingredientes } from 'src/app/models/ingredientes';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-modal-ingredientes',
  templateUrl: './modal-ingredientes.component.html',
  styleUrls: ['./modal-ingredientes.component.scss']
})
export class ModalIngredientesComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ModalIngredientesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public listaIngredientes: Ingredientes[],
    private storageService: StorageService
  ) { }

  ingredienteForm = new FormControl('', Validators.required);

  ngOnInit(): void {
  }

  public fechar = () => {
    this.dialogRef.close();
  };

  public add() {
    if (this.ingredienteForm.valid) {
      this.addIngredienteToList(this.ingredienteForm.value);
      this.ingredienteForm.setValue(null);
      this.storageService.setListIngredientes(this.listaIngredientes);
    }
  }

  private addIngredienteToList(value: string) {
    this.listaIngredientes.push({
      ingrediente: value,
      default: false
    });
  }

  public rmIngredienteToList(value:string){
    let newList = this.listaIngredientes.filter(obj => obj.ingrediente !== value);
    this.listaIngredientes = newList;
    this.storageService.setListIngredientes(this.listaIngredientes);
  }
}
