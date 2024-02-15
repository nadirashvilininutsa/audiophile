import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticleComponent } from './article/article.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    PanelComponent,
    CategoriesComponent,
    ArticleComponent,
    ProductComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
