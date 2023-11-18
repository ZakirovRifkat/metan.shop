import { useContext, useEffect, useMemo } from "react";
import { Сontext } from "./context";
import { Сontext as globalContext } from "../../../api/context";
import { useLocation, useNavigate } from "react-router-dom";
import { GenderType, Types } from "./store";

export const useProduct = (id: string) => {
    const localStore = useContext(Сontext);
    const globalStore = useContext(globalContext);

    useEffect(() => {
        globalStore.store.merch
            .getProduct({ id: id })
            .then((responce) => {
                localStore.store.setProduct(responce.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    return localStore.store;
};
