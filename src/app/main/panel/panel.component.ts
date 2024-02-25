import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Commercial, NewProduct } from 'src/app/models/api-models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  constructor(private commonService: CommonService) {}

  commercials$: Observable<Commercial> | undefined;
  newProduct$: Observable<NewProduct> | undefined;

  getCommercials(): Observable<Commercial> {
    return this.commonService.getCommercials();
  }

  getNewProduct(): Observable<NewProduct> {
    return this.commonService.getNewProduct();
  }

  ngOnInit() {
    this.commercials$ = this.getCommercials();
    this.newProduct$ = this.getNewProduct();
  }
}
