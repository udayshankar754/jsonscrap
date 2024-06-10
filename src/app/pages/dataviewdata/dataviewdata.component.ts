import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';


@Component({
  selector: 'app-dataviewdata',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzTableModule,
    RouterLink
  ],
  templateUrl: './dataviewdata.component.html',
  styleUrl: './dataviewdata.component.css'
})
export class DataviewdataComponent {
  inputValue : any;
  viewData : any;

  
  onSubmit() {
     this.viewData = JSON.parse(this.inputValue);
     this.viewData = JSON.parse(this.viewData);
  }

}
