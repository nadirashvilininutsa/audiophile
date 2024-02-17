import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticleComponent } from './article/article.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    PanelComponent,
    CategoriesComponent,
    ArticleComponent,
    ProductComponent,
    DetailsComponent,
    MainComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
