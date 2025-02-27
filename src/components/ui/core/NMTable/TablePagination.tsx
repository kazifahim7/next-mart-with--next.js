import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";
import { useState } from "react";

import { usePathname, useRouter } from "next/navigation";

const TablePagination = ({totalPage}:{totalPage:number}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const router = useRouter()
    const pathName = usePathname()



    

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)

            router.push(`${pathName}?page=${currentPage - 1}`)
        }
    }
    const handlenext = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
            router.push(`${pathName}?page=${currentPage + 1}`)
        }
    }





    return (
        <div className="flex items-center gap-2 my-5 justify-center">
            <Button disabled={currentPage === 1} onClick={handlePrevious} variant="outline" size={"sm"} className="w-8 h-8 rounded-full flex items-center">
                <ArrowLeft></ArrowLeft>
            </Button>
            {
                [...Array(totalPage)].map((_, idx) => <Button key={idx} onClick={() => {
                    setCurrentPage(idx + 1)
                    router.push(`${pathName}?page=${idx + 1}`)


                }} variant={currentPage === idx + 1 ? "default" : "outline"} size={"sm"} className="w-8 h-8 rounded-full flex items-center">
                    {idx + 1}
                </Button>)
            }
            <Button onClick={handlenext} disabled={currentPage === totalPage} variant="outline" size={"sm"} className="w-8 h-8 rounded-full flex items-center">
                <ArrowRight></ArrowRight>
            </Button>
        </div>
    );
};

export default TablePagination;