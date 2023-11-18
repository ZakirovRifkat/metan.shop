import { makeAutoObservable } from "mobx";
import { Product, ProductParams } from "../../../api/types";

export type Types = "Hoodie" | "Mikey" | "T-shirts" | "Accessories";
export type TagData = {
    name: string;
    type: Types;
};
export type GenderType = "all"|"boy"|"girls";

export class Store {
    private _productList: Product[] = [];
    private _type: Types[] = [];
    private _keywords: string = "";
    private _minprice: number = 0;
    private _maxprice: number = 100000;

    private _arrayType: TagData[] = [
        { name: "Худи", type: "Hoodie" },
        { name: "Майки", type: "Mikey" },
        { name: "Футболки", type: "T-shirts" },
        { name: "Аксессуары", type: "Accessories" },
    ];

    private _gender:GenderType="all";

    constructor() {
        makeAutoObservable(this);
    }

    //get
    public get productList(): Product[] {
        return this._productList;
    }
    public get type(): Types[]{
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
    public get arrayType(): TagData[] {
        return this._arrayType;
    }
    public get gender(): GenderType {
        return this._gender;
    }

    //set
    public setProductList(productList: Product[]): void {
        this._productList = productList;
    }
    public setType(value: Types[]): void {
        this._type = value;
    }
    public setKeywords(value: string): void {
        this._keywords = value;
    }
    public setMinprice(value: number) {
        this._minprice = value;
    }
    public setMaxprice(value: number) {
        this._maxprice = value;
    }
    public setArrayType(value: TagData[]) {
        this._arrayType = value;
    }
    public setGender(value: GenderType) {
        this._gender = value;
    }
}
