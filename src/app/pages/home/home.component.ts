import { Component } from '@angular/core';
import { CarauselComponent } from '../carausel/carausel.component';
import { TableviewComponent } from '../tableview/tableview.component';
import { ChartsComponent } from '../charts/charts.component';
import { CandidatesTableComponent } from '../candidates-table/candidates-table.component';
import { DataviewdataComponent } from '../dataviewdata/dataviewdata.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarauselComponent,
    TableviewComponent,
    ChartsComponent,
    CandidatesTableComponent,
    DataviewdataComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
