import { Component } from '@angular/core';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map'
import { india_map } from './IndiaMaps'
import { test_map } from './testMaps';


@Component({
  selector: 'app-maos',
  standalone: true,
  imports: [
    MapsModule
  ],
  templateUrl: './maos.component.html',
  styleUrl: './maos.component.css'
})
export class MaosComponent {
  public shapeData: object = india_map;


}
