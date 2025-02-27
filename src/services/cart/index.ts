"use server"

import { IOrder } from "@/types/cart"
import { cookies } from "next/headers"

export const createOrder = async (order:IOrder) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: (await cookies()).get("accessToken")!.value
            },
            body: JSON.stringify(order)
        })
        const result = await res.json()
        return result
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return Error(error)

    }
}