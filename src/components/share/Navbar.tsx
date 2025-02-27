"use client"

import { Button } from "../ui/button";
import { Heart, LogOut, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { logout } from "@/services/AuthService";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constants";



export default function Navbar() {

    const { user, setIsLoading } = useUser()
    const pathname = usePathname()
    const router = useRouter()

    const handleLogout = () => {
        logout()

        toast.success("logout success")
        setIsLoading(true)
        if (protectedRoutes.some(route=>pathname.match(route))){
            router.push('/')
        }
        
    }


    return (
        <header className="border-b w-full">
            <div className="container flex justify-between items-center mx-auto h-16 px-3">
                <h1 className="text-2xl font-black flex items-center">
                    <Link href={'/'}><Image height={100} width={100} src={'https://i.postimg.cc/8PyDSXvq/Frame-2087325767.png'} alt="image" ></Image></Link>
                </h1>
                <div className="max-w-md  flex-grow">
                    <input
                        type="text"
                        placeholder="Search for products"
                        className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
                    />
                </div>
                <nav className="flex gap-2">
                    <Button variant="outline" className="rounded-full p-0 size-10">
                        <Heart />
                    </Button>
                    <Link href={'/cart'}> <Button variant="outline" className="rounded-full p-0 size-10">
                        <ShoppingBag />
                    </Button></Link>


                    {user ? <>
                        <Link href={'/createShop'}> <Button className="rounded-full px-7  ">Create shop</Button></Link>

                        {/*  */}
                        <DropdownMenu>
                            <DropdownMenuTrigger><Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>User</AvatarFallback>
                            </Avatar></DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem><Link href={'/user/dashboard'}>Dashboard</Link></DropdownMenuItem>
                                <DropdownMenuItem>My Shop</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer" onClick={handleLogout} >
                                    <LogOut></LogOut>
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </> : <Link href={'/login'}><Button variant="outline" className="rounded-full px-7 ">login</Button></Link>}




                </nav>
            </div>
        </header>
    );
}