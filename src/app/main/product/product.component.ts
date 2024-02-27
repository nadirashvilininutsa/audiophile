import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, filter, map, switchMap, tap } from 'rxjs';
import {
  Categories,
  Product,
  ProductCategories,
} from 'src/app/models/api-models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService // private router: Router
  ) {}

  private paramsSubscription: Subscription | undefined;
  productCategory: ProductCategories | undefined;
  models$: Observable<Product[]> | undefined;

  getModels(): Observable<Product[]> {
    return this.commonService.getProducts().pipe(
      switchMap((categories) =>
        categories.filter(
          (category) => category.product === this.productCategory
        )
      ),
      map((category) => category.models)
    );
  }

  navigateTo(model: string) {
    this.commonService.navigateTo(model);
  }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.productCategory = params['product'];
      this.models$ = this.getModels();
    });
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
