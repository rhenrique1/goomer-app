import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private subscriptions: Subscription[] = [];
  public product!: Product;
  public quantity: number = 1;
  public isLoading: boolean = true;

  @Input() productId!: number;
  @Output() close = new EventEmitter<boolean>();

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.initProduct();
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach(s => s.unsubscribe());
    }
  }

  initProduct() {
    this.isLoading = true;
    this.subscriptions.push(this.productService.getProductById(this.productId)
      .subscribe(
        res => {
          console.log(res);
          this.product = res;
          this.isLoading = false;
        }, err => {
          console.log(err);
          this.isLoading = false;
        }
      ));
  }

  onConfirmar() {
    this.close.emit(true);
  }

  onClose() {
    this.close.emit(false);
  }

  addProduct() {
    ++this.quantity;
  }

  subProduct() {
    --this.quantity;
  }
}
