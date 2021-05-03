import { Component } from '@angular/core';
import {DoormanService} from './services/doorman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doorman-frontend';

  constructor(
    public doormanService: DoormanService
  ) { }

  openDoor(): void {
    this.doormanService.openDoor().subscribe(data => {
      console.log(data);
    });
  }

  openGarage(): void {
    this.doormanService.openGarage().subscribe(data => {
      console.log(data);
    });
  }
}
