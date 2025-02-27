import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/core/ProductCard";
import { getFlashSaleProducts } from "@/services/FlashSale";

import { IProduct } from "@/types/product";
import Link from "next/link";
import CountDown from "./CountDown";


const FlashSale = async () => {
    const { data: products } = await getFlashSaleProducts()
    return (
        <div className="my-20">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h2 className="font-bold text-2xl">Flash sale</h2>
                    <CountDown></CountDown>
                </div>
                <Link href="/products">
                    <Button variant="outline" className="rounded-full">
                        All collection
                    </Button>
                </Link>


            </div>
            <div className="grid grid-cols-5  gap-8 my-5">
                {
                    products?.slice(0,4).map((product: IProduct, idx: number) => <ProductCard key={idx} product={product}></ProductCard>)
                }

            </div>
        </div>
    );
};

export default FlashSale;