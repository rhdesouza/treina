import { Injectable } from '@angular/core';
import { Ingredientes } from '../models/ingredientes';

const LIST_INGREDIENTES = "listIngredientes";
const LIST_VENDAS = "listVendas";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private sessionStorage!: WindowSessionStorage;

  setListIngredientes = (ingrediente: Ingredientes[]) => {
    sessionStorage.setItem(LIST_INGREDIENTES, JSON.stringify(ingrediente));
  }

  getListIngredientes = () => {
    let list = sessionStorage.getItem(LIST_INGREDIENTES)
    return list ? JSON.parse(list) : [];
  }

  setListVenda = (venda: string) => {
    let listVenda: string[] = this.getListVenda();
    listVenda.push(venda);
    sessionStorage.setItem(LIST_VENDAS, JSON.stringify(listVenda));
  }

  getListVenda = (): string[] => {
    let list = sessionStorage.getItem(LIST_VENDAS)
    return list ? JSON.parse(list) : [];
  };

}
