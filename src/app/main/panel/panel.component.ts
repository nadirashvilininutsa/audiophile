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

  commercials$: Observable<Commercial> | undefined;
  newProduct$: Observable<ProductBasics> | undefined;

  getCommercials(): Observable<Commercial> {
    return this.commonService.getCommercials();
  }

  getNewProduct(): Observable<ProductBasics> {
    return this.commonService.getNewProduct();
  }

  navigateTo(model: string) {
    this.commonService.navigateTo(model);
  }

  ngOnInit() {
    this.commercials$ = this.getCommercials();
    this.newProduct$ = this.getNewProduct();
  }
}
