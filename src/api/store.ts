import { makeAutoObservable } from "mobx";
import { Merch as MerchServices } from "./services";

class Merch {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getMerch = MerchServices.getMerch;
}

export class Store {
    constructor() {
        makeAutoObservable(this);
    }

    public readonly merch = new Merch();
}
