import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer";
import { CategoriesMapReducer } from "./categories/categories.reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    categories: CategoriesMapReducer
});