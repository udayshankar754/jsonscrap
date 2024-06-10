import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-tableview',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule
  
  ],
  templateUrl: './tableview.component.html',
  styleUrl: './tableview.component.css'
})
export class TableviewComponent implements OnInit{
  tableData  = [
    {
      "party": "SKM",
      "lead": 13,
      "won": 30,
      "total": 50,
      "partyColor": "A10002"
    },
    {
      "party": "BJP",
      "lead": 25,
      "won": 40,
      "total": 60,
      "partyColor": "FF9933"
    },
    {
      "party": "INC",
      "lead": 5,
      "won": 15,
      "total": 50,
      "partyColor": "0077CC"
    },
    {
      "party": "AITC",
      "lead": 10,
      "won": 35,
      "total": 55,
      "partyColor": "FF66CC"
    },
    {
      "party": "AAP",
      "lead": 8,
      "won": 25,
      "total": 40,
      "partyColor": "00BFFF"
    },
    {
      "party": "SS",
      "lead": 3,
      "won": 20,
      "total": 30,
      "partyColor": "FFD700"
    },
    {
      "party": "SP",
      "lead": 7,
      "won": 18,
      "total": 45,
      "partyColor": "FF4500"
    }
  ]
  
  constructor() {}
  ngOnInit(): void {

  }

  getcolor(data : any) {
    return data?.partyColor;
  }

}
