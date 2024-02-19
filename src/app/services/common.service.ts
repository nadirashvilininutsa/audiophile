import { Injectable } from '@angular/core';
import { ProductCategories } from '../models/api-models';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  openedCategory: ProductCategories | undefined;
}
