import { useContext, useEffect } from "react";
import { Сontext } from "./context";
import { Сontext as globalContext } from "../../../api/context";
import { Product } from "../../../api/types";

export const useMerch = () => {
    const localStore = useContext(Сontext);
    const globalStore = useContext(globalContext);
    useEffect(() => {
        globalStore.store.merch
            .getMerch({})
            .then((responce) => {
                localStore.store.setProductList(responce.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    return localStore.store.productList;
};
