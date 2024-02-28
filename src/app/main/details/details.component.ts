import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Observable,
  Subscription,
  concatMap,
  filter,
  map,
  mergeMap,
} from 'rxjs';
import { Product } from 'src/app/models/api-models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  constructor(
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute
  ) {}

  private paramsSubscription: Subscription | undefined;
  productDetails$: Observable<Product> | undefined;
  productTitle: string = '';
  productQuantity: number = 1;

  changeQuantity(quantity: number) {
    if (quantity < 0 && this.productQuantity === 1) return;
    this.productQuantity += quantity;
  }

  addToCart(item: Product) {
    this.productQuantity = 1;
  }

  // getAllProducts(): Observable<Product> {
  getAllProducts() {
    return this.commonService
      .getProducts()
      .pipe(
        concatMap((products) => products),
        mergeMap((product) => product.models)
      )
      .subscribe((x) => console.log(x));
  }

  getProductDetails(productModel: string): Observable<Product> {
    // productModel = productModel.toLowerCase();
    return this.commonService.getProducts().pipe(
      concatMap((products) => products),
      mergeMap((product) => product.models),
      filter(
        (model) => model.title.toLowerCase() === productModel.toLowerCase()
      ),
      map((model) => {
        model.price = this.formatPrice(model.price);
        return model;
      })
    );
  }

  // navigateTo(model: string) {
  //   this.commonService.navigateTo(model);
  // }

  addBreakToTitle(title: string): string {
    const words = title.split(' ');
    if (words.length > 1) {
      words.splice(words.length - 1, 0, '<br />');
      return words.join(' ');
    }
    return title;
  }

  formatPrice(priceInString: string) {
    const priceInNumber = parseFloat(priceInString);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: priceInString.includes('.')
        ? priceInString.split('.')[1].length
        : 0,
    }).format(priceInNumber);
  }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      const productModel: string = params['model'].split('-').join(' ');

      this.productTitle = this.addBreakToTitle(productModel);
      this.productDetails$ = this.getProductDetails(productModel);

      this.getAllProducts();
    });
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
