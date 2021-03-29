import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { NavigationService } from 'src/app/shared/utils/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public restaurants: Restaurant[] = [];
  public isLoading: boolean = true;
  private subscriptions: Subscription[] = [];

  constructor(
    private restaurantService: RestaurantService,
    public navigationService: NavigationService,
  ) { }

  ngOnInit(): void {
    this.initRestaurants();
  }

  initRestaurants(): void {
    this.isLoading = true;
    this.subscriptions.push(this.restaurantService.getRestaurants()
      .subscribe(
        res => {
          console.log(res);
          this.restaurants = res;
          this.isLoading = false;
        }, err => {
          console.log(err);
          this.isLoading = false;
        }
      ));
  }
}
