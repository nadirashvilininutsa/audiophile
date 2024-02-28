import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticleComponent } from './article/article.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { MayLikeComponent } from './may-like/may-like.component';

@NgModule({
  declarations: [
    PanelComponent,
    CategoriesComponent,
    ArticleComponent,
    ProductComponent,
    DetailsComponent,
    MainComponent,
    MayLikeComponent,
  ],
  imports: [CommonModule, MainRoutingModule, FormsModule],
})
export class MainModule {}
