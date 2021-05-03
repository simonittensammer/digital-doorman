import { Component } from '@angular/core';
import {DoormanService} from "../services/doorman.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
