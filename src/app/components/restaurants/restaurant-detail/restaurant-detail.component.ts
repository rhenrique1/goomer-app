import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  public restaurant!: Restaurant;
  private restaurantId!: number;
  private subscriptions: Subscription[] = [];
  public isLoading: boolean = true;
  public productSelected: boolean = false;
  public selectedProductId: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.restaurantId = params['id'];
    });
    this.initRestaurant();
  }

  ngOnDestroy(): void {
    if(this.subscriptions.length > 0) {
      this.subscriptions.forEach(s => s.unsubscribe());
    }
  }

  initRestaurant() {
    this.isLoading = true;
    this.subscriptions.push(this.restaurantService.getRestaurantById(this.restaurantId)
    .subscribe(
      res => {
        console.log(res);
        this.restaurant = res;
        this.isLoading = false;
      }, err => {
        console.log(err);
        this.isLoading = false;
      } 
    ));
  }

  selectProduct(productId: number) {
    console.log(productId);
    this.selectedProductId = productId;
    this.productSelected = true;
  }

  closeProductDetail(boolean: any) {
    this.productSelected = false;
  }

}
