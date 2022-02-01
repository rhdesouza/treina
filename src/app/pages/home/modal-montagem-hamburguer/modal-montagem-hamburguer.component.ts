import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalSucessComponent } from 'src/app/components/modal-sucess/modal-sucess.component';
import { Ingredientes } from 'src/app/models/ingredientes';
import { StorageService } from 'src/app/services/storage.service';
import { ModalIngredientesComponent } from '../modal-ingredientes/modal-ingredientes.component';

@Component({
  selector: 'app-modal-montagem-hamburguer',
  templateUrl: './modal-montagem-hamburguer.component.html',
  styleUrls: ['./modal-montagem-hamburguer.component.scss']
})
export class ModalMontagemHamburguerComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ModalIngredientesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public listaIngredientes: Ingredientes[],
    private storageService: StorageService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  public itensForm: FormGroup = this.fb.group({
    cliente: this.fb.control('', Validators.required),
    itens: this.fb.array([], Validators.required)
  });

  ngOnInit(): void {
    this.listaIngredientes.forEach(x => this.adicionarItem(this.novoItem(x.ingrediente)));
  }

  get itens(): FormArray {
    return this.itensForm.get('itens') as FormArray;
  }

  public novoItem = (ingrediente: string): FormGroup => {
    return this.fb.group({
      ingrediente: this.fb.control(ingrediente, Validators.required),
      qtd: this.fb.control(0, Validators.min(0)),
    })
  }

  public adicionarItem = (iten: FormGroup) => {
    this.itens.push(iten);
  }

  public fechar = () => {
    this.dialogRef.close();
  };

  public salvar = () => {
    if (this.validacaoRegraDeNegocio(this.itensForm.value.itens)) {
      let listPedido = this.transformarListaDeVendaEmString(this.itensForm.value.cliente, this.itensForm.value.itens);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.width = '40%';
      dialogConfig.data = listPedido;

      this.storageService.setListVenda(listPedido);

      this.dialog.open(ModalSucessComponent, dialogConfig).afterClosed().subscribe(() => {
        this.dialogRef.close();
      });
    }
  }

  private transformarListaDeVendaEmString=(cliente: string, itens: any[]) =>{
    let vendaItem: string = '';
    itens.filter(x => x.qtd > 0).forEach(x => vendaItem += ` ${x.qtd} x ${x.ingrediente}`);
    return `${cliente}:${vendaItem}`;
  }

  private validacaoRegraDeNegocio = (itens: Ingredientes[]): Boolean => {
    const itensInclusos = itens.filter(item => item.qtd != null && item.qtd > 0);

    if (itensInclusos.filter(item => item.ingrediente.includes('Pão')).length === 0) {
      alert('É necessário incluir ao menos um pão.');
      return false;
    }

    if (itensInclusos.filter(item => item.ingrediente.includes('Hambúrguer')).length === 0) {
      alert('É necessário incluir ao menos um Hamburguer');
      return false;
    }

    return true;
  }
}
