import { selector } from "recoil";

import axios from "axios";
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "EPWseG23BNY5-VOFjdlw09dAlD23w";
const PER_PAGE = 30;

export const imageData = selector({
    key: "imageData",
    get: async ({ get }) => {
        const searchValue = get(searchState);
        const pageValue = get(pageState);

        try {
            const res = await axios.get(
                `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
            );
            return res.data;
        } catch (error) {
            console.error("API ERROR → 기본값 반환", error);

            return {
                total_pages: 0,
                results: [],
            };
        }
    },
});
