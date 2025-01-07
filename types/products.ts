export interface ProductCard {
  id: number; // уникальный идентификатор товара
  name: string; // название товара
  description: string; // описание товара
  imageUrl: string; // URL изображения товара
  price: string; // цена товара
  category: string; // категория товара
}

export interface Category {
  id: number;
  title: string;
  link: string;
}
