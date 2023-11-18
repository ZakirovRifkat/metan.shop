import { createContext } from "react";
import { Store } from "./store";

interface State {
    store: Store;
}
export const store = new Store();
export const Сontext = createContext<State>({ store }); 

