import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalSucessComponent } from 'src/app/components/modal-sucess/modal-sucess.component';
import { Ingredientes } from 'src/app/models/ingredientes';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-montagem-hamburguer',
  templateUrl: './montagem-hamburguer.component.html',
  styleUrls: ['./montagem-hamburguer.component.scss']
})
export class MontagemHamburguerComponent implements OnInit {
  private  listaIngredientes: Ingredientes[] = [];
  constructor(
    private storageService: StorageService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private router: Router
  ) { 
    this.listaIngredientes = this.storageService.getListIngredientes();
  }

  public itensForm: FormGroup = this.fb.group({
    cliente: this.fb.control('', Validators.required),
    itens: this.fb.array([], Validators.required)
  });

  ngOnInit() {
    this.listaIngredientes = this.storageService.getListIngredientes();
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
    this.router.navigate(['inicio']);
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
        this.fechar();
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
