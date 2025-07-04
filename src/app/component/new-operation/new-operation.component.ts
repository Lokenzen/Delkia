import { Component, inject, model, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Operation } from '../../core/models/operation';
import { listeOperations } from '../../core/constants/const';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-new-operation',
  templateUrl: 'new-operation.component.html',
  styleUrl: './new-operation.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatSelectModule
],
})

export class NewOperationComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.operationResult());
    this.currentOperation = this.data;
    this.currentRank = this.data.rank;
    if(this.currentOperation.name != null) {
      this.editMode = true;
    }
    
    console.log(this.currentRank);
  }
  readonly dialogRef = inject(MatDialogRef<NewOperationComponent>);
  readonly data = inject<Operation>(MAT_DIALOG_DATA);
  readonly operationResult = model(this.data);

  listOperations: Operation[] = listeOperations;
  currentOperation: Operation = {
    rank: 0,
    manipulation: [],
    name: '',
    prevention: ''}   
  currentRank: number = 0;
  editMode: boolean = false;

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    console.log(this.currentRank);
    this.currentOperation.rank = this.currentRank;
    this.dialogRef.close(this.currentOperation);
  }
}