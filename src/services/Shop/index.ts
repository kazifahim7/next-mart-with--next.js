"use server"

import { cookies } from "next/headers"


export const createShop = async (data: FormData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`, {
            method: "POST",
            headers: {
                Authorization: (await cookies()).get("accessToken")!.value
            },
            body: data // reason it is a form data ->

        })
        const result = await res.json()
        return result
    } catch (error: any) {
        return Error(error)

    }
}