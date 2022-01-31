import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-sucess',
  templateUrl: './modal-sucess.component.html',
  styleUrls: ['./modal-sucess.component.scss']
})
export class ModalSucessComponent implements OnInit {

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public mensagem: string,
    private dialogRef: MatDialogRef<ModalSucessComponent>
  ) { }

  ngOnInit(): void {
    setTimeout(() => { this.dialogRef.close() }, 2000);
  }

}
