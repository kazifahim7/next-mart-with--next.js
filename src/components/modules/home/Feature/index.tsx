import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getAllProducts } from "@/services/Product";
import { IProduct } from "@/types/product";
import Link from "next/link";


const FeatureProducts = async () => {
    const {data:products} = await getAllProducts()
    return (
        <div className="my-20">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl">Feature Product</h2>
                <Link href="/products">
                    <Button variant="outline" className="rounded-full">
                        All collection
                    </Button>
                </Link>

               
            </div>
            <div className="grid grid-cols-5  gap-8 my-5">
                {
                    Array(10).fill(products?.[0]).map((product: IProduct, idx: number) => <ProductCard key={idx} product={product}></ProductCard>)
                }

            </div>
        </div>
    );
};

export default FeatureProducts;