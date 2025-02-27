import AllProduct from "@/components/modules/products";
import Banner from "@/components/modules/products/Banner";
import CategoryCard from "@/components/ui/core/CateGoryCard";
import { getAllCategories } from "@/services/category";
import { getAllProducts } from "@/services/Product";
import { ICategory } from "@/types/category";


const AllProductPage = async () => {
    const { data: categories } = await getAllCategories()
    const {data:products}=await  getAllProducts()
    return (
        <div className="container mx-auto">
            <Banner title="All Product" path="Home - Product"></Banner>
            <h2 className="text-xl font-bold">Featured Collection</h2>
            <div className="grid grid-cols-6 gap-8 my-5 bg-gray-200 p-5 rounded-md">
                {categories?.slice(0, 6).map((category: ICategory, idx: number) => (
                    <CategoryCard key={idx} category={category} />
                ))}
            </div>

            <AllProduct products={products}></AllProduct>

        </div>
    );
};

export default AllProductPage;