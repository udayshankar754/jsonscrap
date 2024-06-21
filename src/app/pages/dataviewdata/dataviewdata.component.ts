import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DownloadService } from '../../services/download/download.service';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { ExcelService } from '../../services/excel/excel.service';


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
  data: any;
  stateId : any;
  PcNoTpe : any;


  constructor(
    private downloadData : DownloadService,
    private message : NzMessageService,
    private excelService: ExcelService,
  ){}

  onSubmit() {
    // this.viewData = JSON.parse(this.inputValue);
    // this.viewData = JSON.parse(this.viewData);
    this.inputValue = [];
    

    // this.viewData.sort((a : any, b : any) => {
    //  if (a.candidate < b.candidate) {
    //      return -1;
    //  }
    //  if (a.candidate > b.candidate) {
    //      return 1;
    //  }
    //  return 0;
    // });
    let reqOvj = {
      stateId : this.stateId , 
      pcNo : this.PcNoTpe
    }
    console.log(reqOvj);

    this.excelService.dataFetcher(reqOvj).subscribe((data : any) => {
      this.viewData = JSON.parse(data);

    })


 }

 
 onFileChange(event: any): void {
  const file = event.target.files[0];
  if (file) {
    this.excelService.readExcelFile(file).then((data) => {
      this.data = data.json;
    }).catch((error) => {
      console.error('Error reading Excel file:', error);
    });
  }
}

toWriteData() {
  if (this.viewData && this.data) {
    for (let i = 0; i < this.viewData.length; i++) {
      let rowData = this.viewData[i];
      if (rowData) {
          const row = this.data.find((item : any) => {
            if(item[1] == rowData.stateid && item[4] == rowData.pcno && item[6].toLowerCase() == rowData.candidate.toLowerCase()) {
              item[8] = rowData.gender;
              item[9] = rowData.age;
              item[10] = rowData.education;
              item[11] = rowData.crimecases;
              item[12] = rowData.totalassets;
              return item
            }
          });        
      }
    }
    this.excelService.writeExcelFile(this.data, 'updated_file.xlsx');
  }
}





}