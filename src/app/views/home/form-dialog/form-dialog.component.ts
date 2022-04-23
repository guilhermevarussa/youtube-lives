import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {

   public liveForm!:FormGroup;

  constructor(
    private form: FormBuilder,
    public dialogRef: MatDialogRef<FormDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.liveForm=this.form.group({
      liveName:['',[Validators.required]],
      channelName:['',[Validators.required]],
      liveLink:['',[Validators.required]],
      liveDate:['',[Validators.required]],
      liveTime:['',[Validators.required]],

    })
  }


  onCancel(): void {
    this.dialogRef.close();
  }

}
