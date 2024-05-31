import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer";
import { CategoriesMapReducer } from "./categories/categories.reducer";
import { CartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    categories: CategoriesMapReducer,
    cart: CartReducer
});