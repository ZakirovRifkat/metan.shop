import { makeAutoObservable } from "mobx";
import { Merch as MerchServices } from "./services";

class Merch {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getMerch = MerchServices.getMerch;
    public readonly getProduct = MerchServices.getProduct;
}

export class Store {
    constructor() {
        makeAutoObservable(this);
    }

    public readonly merch = new Merch();
}
