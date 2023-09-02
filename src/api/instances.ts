import axios from "axios";
import { baseUrl } from "./const";

export const $metanShop_api = axios.create({ baseURL: baseUrl });
