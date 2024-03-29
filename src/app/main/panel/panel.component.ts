import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Commercial, ProductBasics } from 'src/app/models/api-models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  constructor(private commonService: CommonService) {}

  newProduct$: Observable<ProductBasics> | undefined;

  getNewProduct(): Observable<ProductBasics> {
    return this.commonService.getNewProduct();
  }

  navigateTo(model: string) {
    this.commonService.navigateTo(model);
  }

  ngOnInit() {
    this.newProduct$ = this.getNewProduct();
  }
}
