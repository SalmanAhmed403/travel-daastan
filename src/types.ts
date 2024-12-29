export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FoodItem {
  name: string;
  description: string;
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  images: string[];
  location: string;
  description: string;
  history: string;
  bestTimeToVisit: string;
  thingsToSee: string[];
  localFood: FoodItem[];
  reviews: Review[];
}