import { createSelector } from "reselect";

const selectorCategoriesReducer = (state) => {
    return state.categories;
};

export const selectorCategories = createSelector(
    [selectorCategoriesReducer],
    (categoriesSlice) => {
        return categoriesSlice.categories;
    }
);

export const selectorCategoriesMap = createSelector(
    [selectorCategories],
    (categories) => {
        return categories.reduce((empObj, category) => {
            const { title, items } = category;
            empObj[title.toLowerCase()] = items;
            return empObj;
        }, 
        {});
    }
);