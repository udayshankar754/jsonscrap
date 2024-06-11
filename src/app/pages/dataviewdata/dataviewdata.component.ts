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
  constructor(
    private downloadData : DownloadService,
    private message : NzMessageService
  ){}

  async onSubmit() {
    try {
      let testData = JSON.parse(this.inputValue);
      this.viewData = JSON.parse(testData);
      this.processViewDataInChunks(this.viewData);
      this.inputValue = '';
    } catch (error) {
      console.error('Error processing data:', error);
    }
  }
  
   download(data : any) {
    data.disabled = true;
    this.downloadData.downloadImage(data.photo , this.generateFilename(data.candidate , data.photo))
    // this.downloadImage(data.photo , this.generateFilename(data.candidate , data.photo));
    // this.downloadImage(data.plogo , this.extractFilenameFromUrl(data.plogo))
   }

   async  processViewDataInChunks(viewData : any) {
    const chunkSize = 10;
    const delay = 5000; // 10 seconds in milliseconds

    for (let i = 0; i < viewData.length; i += chunkSize) {
        // Get the current chunk
        const chunk = viewData.slice(i, i + chunkSize);
        
        // Process each element in the current chunk
        for (const element of chunk) {
            element.disabled = true;
            await this.downloadData.downloadImage(element.photo, this.generateFilename(element.candidate, element.photo));
        }

        // If there are more chunks to process, wait for 30 seconds
        if (i + chunkSize < viewData.length) {
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }


    this.message.success("file Downloaded Complete")
}






generateFilename(candidate: string, photoUrl: string): string {
    const extension = this.getFileExtension(photoUrl);
    const modifiedCandidateName = candidate.replace(/ /g, '_');
    return `${modifiedCandidateName}.${extension}`;
}

extractFilenameFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 1];
}

getFileExtension(url: string): string {
    return url.split('.').pop() || '';
}
}