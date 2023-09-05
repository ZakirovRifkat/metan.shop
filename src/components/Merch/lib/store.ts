import { makeAutoObservable } from "mobx";
import { Product, ProductParams } from "../../../api/types";

export class Store {
    private _productList: Product[] = [];
    private _productParams: ProductParams = {};

    constructor() {
        makeAutoObservable(this);
    }

    public get productList(): Product[] {
        return this._productList;
    }

    public get productParams(): ProductParams {
        return this._productParams;
    }

    public setProductList(productList: Product[]): void {
        this._productList = productList;
    }

    public setProductParams(productParams: ProductParams): void {
        this._productParams = productParams;
    }
}
