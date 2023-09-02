import { $metanShop_api } from "./instances";
import * as urls from "./url";
import * as types from "./types";
import { AxiosResponse } from "axios";

export class Merch {
    static async getMerch({
        type,
        size,
        name,
        price,
        maxprice,
        minprice,
    }: types.ProductParams): Promise<AxiosResponse<types.Product[]>> {
        return await $metanShop_api.get<types.Product[]>(urls.Client.getMerch(), {
            params: { type, size, name, price, maxprice, minprice },
        });
    }
}
