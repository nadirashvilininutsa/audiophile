export enum ProductCategories {
  headphones = 'headphones',
  speakers = 'speakers',
  earphones = 'earphones',
}

export interface ImgUrls {
  desktop: string;
  mobile: string;
  tablet: string;
}

export interface Article {
  title: string;
  article: string;
  img: ImgUrls;
}

export interface Commercial {
  '1': CommercialItem;
  '2': CommercialItem;
  '3': CommercialItem;
}

export interface CommercialItem {
  img: ImgUrls;
  title: string;
  description: string;
}

export interface ProductPhotos {
  1: ImgUrls;
  2: ImgUrls;
  3: ImgUrls;
}

export interface InTheBox {
  quantity: number;
  item: string;
}

export interface Product {
  newProduct: boolean;
  title: string;
  description: string;
  img: ImgUrls;
  price: number;
  features: string;
  inTheBox: InTheBox[];
  photos: ProductPhotos;
}

export interface Categories {
  product: string;
  models: Product[];
  img: ImgUrls;
}

export interface NewProduct {
  newProduct: boolean;
  title: string;
  description: string;
  img: ImgUrls;
}

export interface InfoFromBack {
  categories: Categories[];
  commercial: Commercial;
  articles: Article[];
  newProduct: NewProduct;
}
