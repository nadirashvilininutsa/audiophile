import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/api-models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  constructor(private commonService: CommonService) {}

  articles$: Observable<Article[]> | undefined;

  getArticles(): Observable<Article[]> {
    return this.commonService.getArticles();
  }

  ngOnInit() {
    this.articles$ = this.getArticles();
  }
}
