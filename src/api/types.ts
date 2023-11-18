export interface Product {
    Id: string;
    ItemName: string;
    Price: number;
    Type: string;
    Picture: string;
    Description: string;
    OfSize: string[];
    IsExist: boolean;
    CountExist: number;
    Sex: string;
  }
  export interface ProductParams{
    type?: string;
    size?: string;
    name?: string;
    price?: number;
    maxprice?: number;
    minprice?: number;
  }