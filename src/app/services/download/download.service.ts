import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http : HttpClient
  ) { }
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
}
