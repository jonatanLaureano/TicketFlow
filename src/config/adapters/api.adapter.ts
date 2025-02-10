import { HttpAdapter } from "./http.adapter";

export const ApiAdapter = new HttpAdapter({
    baseURL: import.meta.env.VITE_API_URL,
})