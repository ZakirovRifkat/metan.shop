import { useContext, useEffect, useMemo } from "react";
import { Сontext } from "./context";
import { Сontext as globalContext } from "../../../api/context";
import { useLocation, useNavigate } from "react-router-dom";
import { GenderType, Types } from "./store";

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

export const useSearchParamSync = () => {
    const {store} = useContext(Сontext);

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    
    useEffect(() => {
        const typeParams = searchParams.get("type");
        const nameParams = searchParams.get("name");
        const minPriceParams = searchParams.get("minPrice");
        const maxPriceParams = searchParams.get("maxPrice");
        const genderParams = searchParams.get("gender");

        if (typeParams != null) {
            store.setType(typeParams as Types);
        }
        if (nameParams != null) {
            store.setKeywords(nameParams);
        }
        if (minPriceParams != null) {
            store.setMinprice(Number(minPriceParams));
        }
        if (maxPriceParams != null) {
            store.setMaxprice(Number(maxPriceParams));
        }
        if (genderParams != null) {
            store.setGender(genderParams as GenderType);
        }
    }, [location.search]);

    useEffect(() => {
        if (store.type != "Hoodie") {
            searchParams.set("type", store.type);
        }else{
            searchParams.delete("type")
        }
        if (store.keywords != "") {
            searchParams.set("name", store.keywords);
        }else{
            searchParams.delete("name")
        }
        if (store.minprice != 0) {
            searchParams.set("minPrice", store.minprice.toString());
        }else{
            searchParams.delete("minPrice")
        }
        if (store.maxprice != 100000) {
            searchParams.set("maxPrice", store.maxprice.toString());
        }else{
            searchParams.delete("maxPrice")
        }
        if (store.gender != "all") {
            searchParams.set("gender", store.gender);
        }else{
            searchParams.delete("gender")
        }
        navigate(`?${searchParams.toString()}`);
    }, [store.type, store.gender, store.keywords, store.minprice, store.maxprice]);
};