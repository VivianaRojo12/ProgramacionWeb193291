import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthServiceService} from '../service/auth/auth-service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editFormGroup : FormGroup;
  constructor(private _formBuilder: FormBuilder, private _authServiceService : AuthServiceService, public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data: []) { }

  ngOnInit(): void {
    this.editFormGroup = this._formBuilder.group({
      fullName : [this.data['fullName'], Validators.required],
      age: [this.data['age'], Validators.required],
      email: [this.data['email'], Validators.required]
    })
  }

  close(){
    this.dialogRef.close();
  }

  updateUser(){
    const dataForm = this.editFormGroup.value;
    this._authServiceService.putUser(this.data['id'], dataForm.fullName, dataForm.age, dataForm.email).subscribe((respuesta : []) => {
      if(respuesta != null){
        this.dialogRef.close();
      }
    });
  }


  

}
