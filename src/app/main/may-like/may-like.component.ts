import { Component } from '@angular/core';
import { Observable, concatMap, map, mergeMap, switchMap, tap } from 'rxjs';
import { Product } from 'src/app/models/api-models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-may-like',
  templateUrl: './may-like.component.html',
  styleUrls: ['./may-like.component.scss'],
})
export class MayLikeComponent {
  constructor(private commonService: CommonService) {}

  randomProducts$: Observable<Product[]> | undefined;

  getRandomNumbers(
    numQuantity: number,
    maxNum: number,
    minNum: number = 1
  ): number[] {
    function getRandomNumber(
      min: number = minNum,
      max: number = maxNum
    ): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNumbers: number[] = [];

    while (randomNumbers.length < numQuantity) {
      const randomNum = getRandomNumber();
      if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum);
      }
    }
    return randomNumbers;
  }

  getRandomProducts(): Observable<Product[]> {
    let randomNumbers: number[] = [];
    return this.commonService.getProducts().pipe(
      map((products) => products.flatMap((product) => product.models)),
      tap((products) => {
        if (products.length < 3) {
          randomNumbers = this.getRandomNumbers(
            products.length,
            products.length
          );
        } else {
          randomNumbers = this.getRandomNumbers(3, products.length);
        }
        randomNumbers = randomNumbers.map((num) => num - 1);
      }),
      map((products) => products.filter((_, i) => randomNumbers.includes(i)))
    );
  }

  navigateTo(model: string) {
    this.commonService.navigateTo(model);
  }

  ngOnInit() {
    this.randomProducts$ = this.getRandomProducts();
  }
}
