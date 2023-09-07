import { makeAutoObservable } from "mobx";
import { Product, ProductParams } from "../../../api/types";
type ProductsFilter = {
    type?: string;
    name?: string;
    minprice?: number;
    maxprice?: number;
};
export class Store {
    private _productList: Product[] = [];
    private _productParams: ProductsFilter = {
        type: "",
        name: "",
        minprice: 0,
        maxprice: 10000,
    };
    private _type:string = '';
    private _keywords:string = '';
    private _minprice:number = 0;
    private _maxprice:number = 100000;

    constructor() {
        makeAutoObservable(this);
    }

    //get
    public get productList(): Product[] {
        return this._productList;
    }
    public get productParams(): ProductsFilter {
        return this._productParams;
    }
    public get type(): string {
        return this._type;
    }
    public get keywords(): string {
        return this._keywords;
    }
    public get minprice(): number {
        return this._minprice;
    }
    public get maxprice(): number {
        return this._maxprice;
    }

    //set
    public setProductList(productList: Product[]): void {
        this._productList = productList;
    }
    public setProductParams(productParams: ProductsFilter): void {
        this._productParams = productParams;
    }
    public setType(value: string): void {
        this._type = value;
    }
    public setKeywords(value: string): void {
        this._keywords = value;
    }
    public setMinprice(value: number){
        this._minprice = value;
    }
    public setMaxprice(value: number){
        this._maxprice = value;
    }
}
