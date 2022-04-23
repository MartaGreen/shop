export interface IGoodsInitialState {
  status: string;
  goods: IGood[];
}

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

export interface IGoodDetailsInitialState {
  status: string;
  goodDetails: IGood;
}
