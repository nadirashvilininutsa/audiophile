import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategories } from 'src/app/models/api-models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  productCategories = ProductCategories;
}
