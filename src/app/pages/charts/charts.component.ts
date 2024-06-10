import { Component } from '@angular/core';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    CircularGaugeModule
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
  tableData  = [
    {
      "party": "SKM",
      "won": 30,
      "partyColor": "A10002"
    },
    {
      "party": "BJP",
      "won": 40,
      "partyColor": "FF9933"
    },
    {
      "party": "INC",
      "won": 15,
      "partyColor": "0077CC"
    },
    {
      "party": "AITC",
      "won": 35,
      "partyColor": "FF66CC"
    },
    {
      "party": "AAP",
      "won": 25,
      "partyColor": "00BFFF"
    },
    {
      "party": "SS",
      "won": 20,
      "partyColor": "FFD700"
    },
    {
      "party": "SP",
      "won": 18,
      "partyColor": "FF4500"
    }
  ]
  gaugeValue = this.tableData[0].won; // Initial value (SKM's won)
  gaugeLabel = this.tableData[0].party; // Initial label (SKM)
  gaugeAppendText = 'Won';
  size = 80;

 

}
