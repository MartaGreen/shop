export interface IGood {
  id: string;
  name: string;
  imageUrls: string[];
  availableAmount: number;
  price: number;
  rating: number;
  isInSale: boolean;
  description: string;
  isInCart: boolean;
  isFavorite: boolean;
  category: string;
  subCategory: string;
}