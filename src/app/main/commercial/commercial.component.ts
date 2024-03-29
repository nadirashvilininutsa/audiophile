import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Commercial } from 'src/app/models/api-models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss'],
})
export class CommercialComponent {
  constructor(private commonService: CommonService) {}

  commercials$: Observable<Commercial> | undefined;

  getCommercials(): Observable<Commercial> {
    return this.commonService.getCommercials();
  }

  navigateTo(model: string) {
    this.commonService.navigateTo(model);
  }

  ngOnInit() {
    this.commercials$ = this.getCommercials();
  }
}
