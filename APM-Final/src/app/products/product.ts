export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

export interface ProductModel {
  itemId: number;
  parentItemId: number;
  name: string;
  msrp: number;
  salePrice: number;
  upc: string;
  shortDescription: string;
  longDescription:String;
  thumbnailImage: string;
  mediumImage:String;
  largeImage:string;
  productTrackingUrl:string;
  marketplace:boolean;
  modelNumber:string;
  sellerInfo:string;
  productUrl:string;
  customerRating:string;
  numReviews:string;
  customerRatingImage:string;
  stock:string;
  offerType:string;
  availableOnline:string;
}

