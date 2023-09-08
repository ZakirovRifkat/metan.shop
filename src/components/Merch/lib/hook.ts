import { useContext, useEffect } from "react";
import { Сontext } from "./context";
import { Сontext as globalContext } from "../../../api/context";

export const useMerch = () => {
    const localStore = useContext(Сontext);
    const globalStore = useContext(globalContext);
    useEffect(() => {
        globalStore.store.merch
            .getMerch({ name: localStore.store.keywords })
            .then((responce) => {
                localStore.store.setProductList(responce.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [localStore.store.keywords]);
    return localStore.store;
};
