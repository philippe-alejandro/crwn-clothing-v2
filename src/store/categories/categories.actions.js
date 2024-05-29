import { CATEGORIES_MAP_ACTION_TYPES } from "./categories.types";

export const setCategoriesMap = (categories) => {
    return {
        type: CATEGORIES_MAP_ACTION_TYPES.SET_CATEGORIES_MAP,
        payload: categories
    };
};