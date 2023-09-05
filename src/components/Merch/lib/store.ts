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

    constructor() {
        makeAutoObservable(this);
    }

    public get productList(): Product[] {
        return this._productList;
    }

    public get productParams(): ProductsFilter {
        return this._productParams;
    }

    public setProductList(productList: Product[]): void {
        this._productList = productList;
    }

    public setProductParams(productParams: ProductsFilter): void {
        this._productParams = productParams;
    }
}
