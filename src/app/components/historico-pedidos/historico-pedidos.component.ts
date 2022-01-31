import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-historico-pedidos',
  templateUrl: './historico-pedidos.component.html',
  styleUrls: ['./historico-pedidos.component.scss']
})
export class HistoricoPedidosComponent implements OnInit {

  @Input() listPedidos: string[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
