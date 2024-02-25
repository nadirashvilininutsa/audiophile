import { Injectable } from '@angular/core';
import { Article, Categories, Commercial } from '../models/api-models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Categories[]>(
      `${environment.jsonServerBase}/categories`
    );
  }

  getCommercials() {
    return this.http.get<Commercial>(
      `${environment.jsonServerBase}/commercial`
    );
  }

  getArticles() {
    return this.http.get<Article[]>(`${environment.jsonServerBase}/articles`);
  }
}
