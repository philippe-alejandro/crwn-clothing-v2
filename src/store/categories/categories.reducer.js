import { CATEGORIES_MAP_ACTION_TYPES } from "./categories.types";

const CATEGORIES_INITIAL_STATE = {
    categories: []
};

export const CategoriesMapReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type) {
        case CATEGORIES_MAP_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categories: payload
            };
        default:
            return state;
    };
};