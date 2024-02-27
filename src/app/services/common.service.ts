import { Injectable } from '@angular/core';
import {
  Article,
  Categories,
  Commercial,
  ProductBasics,
} from '../models/api-models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient, private router: Router) {}

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

  getNewProduct() {
    return this.http.get<ProductBasics>(
      `${environment.jsonServerBase}/newProduct`
    );
  }

  navigateTo(model: string) {
    const modelUrl: string = model.split(' ').join('-');
    this.router.navigate([`details/${modelUrl}`]);
  }
}
