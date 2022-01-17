import { fetcher, asyncRequest } from "./http";

export const searchByQuery = async ({ query = "" }) => {
    const url = `http://localhost:3000/api/search/?q=${query}`;
    return await fetcher(url)
};

export const getCategories = async () => {
    const url = `http://localhost:3000/api/category/`;
    return await fetcher(url)
};