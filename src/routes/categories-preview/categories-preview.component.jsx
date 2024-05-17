import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categoriesMap.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((category) => {
                const products = categoriesMap[category];
                return (
                    <CategoryPreview key={category} products={products} category={category}></CategoryPreview>
                )
            })}
        </Fragment>
    )
};

export default CategoriesPreview;