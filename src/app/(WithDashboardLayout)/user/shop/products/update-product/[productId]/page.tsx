import UpdateProductForm from "@/components/modules/shop/product/UpdateProductFrom";
import { getSingleProduct } from "@/services/Product";


const UpdateProductPage = async ({ params }: { params: Promise<{ productId: string }> }) => {
    const id =  (await params).productId 

    const {data:product} = await getSingleProduct(id)
  
    return (
        <div className="flex justify-center items-center">
            <UpdateProductForm product={product}></UpdateProductForm>
        </div>
    );
};

export default UpdateProductPage;