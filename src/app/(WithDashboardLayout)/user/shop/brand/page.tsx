
import ManageBrands from "@/components/modules/shop/Brand";
import { getAllBrands } from "@/services/Brand";


const ProductBrandPage = async () => {
    const { data} = await getAllBrands();
    return (
        <div>
            <ManageBrands brands={data} />
        </div>
    );
};

export default ProductBrandPage;