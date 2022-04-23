import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {

   public liveForm!:FormGroup;

  constructor(
    private res: LiveService,
    private form: FormBuilder,
    public dialogRef: MatDialogRef<FormDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.liveForm=this.form.group({
      liveName:['',[Validators.required]],
      channelName:['',[Validators.required]],
      liveLink:['',[Validators.required]],
      liveDate:['22-04-2022',[Validators.required]],
      liveTime:['',[Validators.required]],

    })
  }


  createVideo(){
    this.res.postLives(this.liveForm.value).subscribe(result=>{

    })
    this.dialogRef.close();
    this.liveForm.reset();
  }


  onCancel(): void {
    this.dialogRef.close();
    this.liveForm.reset();

  }

}
