"use client";

import { Button } from "@/components/ui/button";

import { citySelector, clearCart, grandTotalSelector, orderedProduct, orderSelector, shippingCostSelector, shippingSelector, subTotalSelector } from "@/redux/Feature/cartslice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { createOrder } from "@/services/cart";
import { useRouter } from "next/navigation";

import { toast } from "sonner";




export default function PaymentDetails() {
    const dispatch=useAppDispatch()
    const subtotal = useAppSelector(subTotalSelector)
    const shippingCost = useAppSelector(shippingCostSelector)
    const order = useAppSelector(orderSelector)
    const grandTotal = useAppSelector(grandTotalSelector)
    const city = useAppSelector(citySelector)
    const shipping = useAppSelector(shippingSelector)
    const cartProduct=useAppSelector(orderedProduct)

    

    const router =useRouter()
   

    const handleOrder =async () => {
        const id = toast.loading("creating")
        try {
            
            if (!city) {
                return toast.error("please enter your city name")
            }
            if (!shipping) {
                return toast.error("please enter your shipping name")
            }
            if (!cartProduct){
                return toast.error("Product missing")
            }


            const res = await createOrder(order)
            console.log(res)
            if(res.success){

                toast.success('order created successfully', { id })
                dispatch(clearCart())
                router.push(res.data.paymentUrl)
                
            }else{
                toast.error(res.message, { id })
            }







            


            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message)
        }
    }





    return (
        <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
            <h1 className="text-2xl font-bold">Payment Details</h1>
            <div className="space-y-2 mt-4">
                <div className="flex justify-between">
                    <p className="text-gray-500 ">Subtotal</p>
                    <p className="font-semibold">{subtotal}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500 ">Discount</p>
                    <p className="font-semibold">00</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500 ">Shipment Cost</p>
                    <p className="font-semibold">{shippingCost}</p>
                </div>
            </div>
            <div className="flex justify-between mt-10 mb-5">
                <p className="text-gray-500 ">Grand Total</p>
                <p className="font-semibold">{grandTotal}</p>
            </div>
            <Button
                onClick={handleOrder}
                className="w-full text-xl font-semibold py-5"
            >
                Order Now
            </Button>
        </div>
    );
}