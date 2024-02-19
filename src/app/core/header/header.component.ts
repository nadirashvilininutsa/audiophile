import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategories } from 'src/app/models/api-models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private commonService: CommonService) {}

  productCategories = ProductCategories;

  navigateToProducts(product: ProductCategories) {
    this.commonService.openedCategory = product;
    this.router.navigate(['main/categories']);
  }
}
