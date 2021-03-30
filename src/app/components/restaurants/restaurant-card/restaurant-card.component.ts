import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { NavigationService } from 'src/app/shared/utils/navigation.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant!: Restaurant;
  @Input() row: boolean = false;

  constructor(public navigationService: NavigationService) { }

  ngOnInit(): void {
  }

  isOpen(): boolean {
    let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes();
    let day = today.getDay();
    let isOpen = false;

    this.restaurant.openingHours.forEach(element => {
      if (day = element.day) {
        if (element.opening < time && element.closing > time) {
          isOpen = true;
        }
      }
    });
    
    return isOpen;
  }
}
