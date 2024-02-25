import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Categories } from 'src/app/models/api-models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(private commonService: CommonService) {}

  productList$: Observable<Categories[]> | undefined;

  getCategories(): Observable<Categories[]> {
    return this.commonService.getProducts();
  }

  ngOnInit() {
    this.productList$ = this.getCategories();
  }
}
