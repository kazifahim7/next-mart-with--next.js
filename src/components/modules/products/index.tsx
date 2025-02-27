import ProductCard from "@/components/ui/core/ProductCard";

import { IProduct } from "@/types/product";
import Sidebar from "./FilterSidebar";


const AllProduct = ({ products }: { products : IProduct[]}) => {
    return (
        <div className="flex gap-8 my-10">
            <div className="">
                <Sidebar></Sidebar>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 my-5">
                    {
                        products?.map((product: IProduct, idx: number) => <ProductCard key={idx} product={product}></ProductCard>)
                    }

                </div>
            </div>
            
        </div>
    );
};

export default AllProduct;