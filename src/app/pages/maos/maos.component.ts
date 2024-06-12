import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { MapsTooltipService, DataLabelService } from '@syncfusion/ej2-angular-maps'
import { india_map } from './IndiaMaps';

@Component({
  selector: 'app-maos',
  standalone: true,
  imports: [
    MapsModule,
  ],
  templateUrl: './maos.component.html',
  styleUrl: './maos.component.css'
})
export class MaosComponent implements OnInit{
  // public shapeData: object = india_map;
  // public shapeSettings: Object = {
  //   fill: '#E5E5E5',
  //   border: { color: 'black', width: 0.5 }
  // };
  // public dataLabelSettings: Object = {
  //   visible: true,
  //   labelPath: 'properties.PC_NAME',
  //   smartLabelMode: 'Hide'
  // };

  // public dataSource?: object[];
  //   public shapeData?: object;
  //   public shapePropertyPath?: string;
  //   public shapeDataPath?: string;
  //   public shapeSettings?: object;

//   constructor() {
    
//   }
//   ngOnInit(): void {
//     this.dataSource = [  
//         {
//             'code': 'AF',
//             'value': 53,
//             'name': 'Afghanistan',
//             'population': 29863010,
//             'density': 119,
//             'color': '#DEEBAE'
//         },
//         {
//             'code': 'AL',
//             'value': 117,
//             'name': 'Albania',
//             'population': 3195000,
//             'density': 111,
//             'color': '#A4D6AD'
//         },
//         {
//             'code': 'DZ',
//             'value': 15,
//             'name': 'Algeria',
//             'population': 34895000,
//             'density': 15,
//             'color': '#37AFAB'
//         },
//         {
//             'code': 'AO',
//             'value': 15,
//             'name': 'Angola',
//             'population': 18498000,
//             'density': 15,
//             'color': '#547C84'
//         },
//         {
//             'code': 'AR',
//             'value': 15,
//             'name': 'Argentina',
//             'population': 40091359,
//             'density': 14,
//             'color': '#CEBF93'
//         },
//         {
//             'code': 'AM',
//             'value': 109,
//             'name': 'Armenia',
//             'population': 3230100,
//             'density': 108,
//             'color': '#a69d70'
//         }
//     ]
//     this.shapeData = world_map;
//     this.shapePropertyPath = 'name';
//     this.shapeDataPath= 'name';
//     this.shapeSettings = {
//         colorValuePath: 'color',
//         fill: '#E5E5E5'
//     }
// };

// public shapeData?: object;
//     public shapeSettings?: object;
//     public dataLabelSettings?: object
//     ngOnInit(): void {
//         this.shapeData = india_map;
//         this.shapeSettings = {
//                 autofill: true
//             };
//         this.dataLabelSettings = {
//             visible: true,
//             labelPath: 'name',
//         };
//    }
  

public tooltipSettings?: object;
public shapeData?: object;
public shapeSettings?: object;
public dataLabelSettings?: object;
ngOnInit(): void {
    this.shapeData = india_map;
    this.shapeSettings = {
        autofill: true
    };
    this.tooltipSettings = {
        visible: true,
        valuePath: 'name'
    };
    this.dataLabelSettings = {
        visible: true,
        smartLabelMode: 'Hide',
        intersectionAction: 'Trim',
        labelPath: 'name',
        animationDuration: 2000
    };
}


}
