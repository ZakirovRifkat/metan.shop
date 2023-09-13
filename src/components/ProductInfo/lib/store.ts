import { makeAutoObservable } from "mobx";
import { Product, ProductParams } from "../../../api/types";

export type Types = "Hoodie" | "Mikey" | "T-shirts" | "Accessories";
export type TagData = {
    name: string;
    type: Types;
};
export type GenderType = "all" | "boy" | "girls";

export class Store {
    private _product: Product | null = null;
    private _id: string = "";

    constructor() {
        makeAutoObservable(this);
    }

    //get
    public get product(): Product | null {
        return this._product;
    }
    public get id(): string {
        return this._id;
    }

    //set
    public setProduct(product: Product): void {
        this._product = product;
    }
    //set
    public setId(id: string): void {
        this._id = id;
    }
}
