import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  constructor(
    private http : HttpClient
  ){}

  async onSubmit() {
    let testData = JSON.parse(this.inputValue);
    this.viewData = JSON.parse(testData)
   }

   download(data : any) {
    data.disabled = true;
    this.downloadImage(data.photo , this.generateFilename(data.candidate , data.photo));
    this.downloadImage(data.plogo , this.extractFilenameFromUrl(data.plogo))
   }


async downloadImage(url: string, filename: string) {
  try {
      const blob = await this.http.get(url, { responseType: 'blob' }).toPromise();
      if (blob) {
          const objectUrl = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = objectUrl;
          a.download = filename;
          a.click();
          URL.revokeObjectURL(objectUrl);
      } else {
          console.error('Blob is undefined');
      }
  } catch (error) {
      console.error('Error downloading image:', error);
  }
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