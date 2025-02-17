import ManageCategories from "@/components/modules/shop/Category";
import { getAllCategories } from "@/services/category";


const ProductCategoryPage = async () => {
    const {data} = await getAllCategories()

    return (
        <div>
            <ManageCategories categories={data}></ManageCategories>
        </div>
    );
};

export default ProductCategoryPage;