import Banner from "@/components/modules/products/Banner";
import DetailsProduct from "@/components/modules/products/productDeatils";
import { getSingleProduct } from "@/services/Product";


const ProductDetailsPage = async ({ params }: { params: Promise<{ productId: string }> }) => {
    const { productId } = await params;

    const { data:product } = await getSingleProduct(productId)


    return (
        <div className="container mx-auto">
           
            <Banner title="Product Details" path="Home - Product - Product Details"></Banner>
            <DetailsProduct product={product}></DetailsProduct>
        </div>
    );
};

export default ProductDetailsPage;