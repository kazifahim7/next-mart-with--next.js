
import { Button } from '@/components/ui/button';
import style from './herosection.module.css'
import Image from 'next/image';
import cupImage from '@/app/assets/cup-with-headphone.png'
const HeroSection = () => {
    return (
        <div className={`${style.banner} mt-3 rounded-xl`}>
            <div className="grid md:grid-cols-2 gap-4 items-center">
                <div className="pl-12">
                    <h1 className="text-4xl font-bold leading-normal">
                        Don&apos;t Miss Out on <br /> These Unbeatable Black <br /> Friday
                        Deals!
                    </h1>
                    <p className="my-3">
                        Save big this Black Friday with unbeatable deals on tech, home
                        essentials, fashion, and more! Limited stock.
                    </p>

                    <Button className="rounded-full mr-2">Buy Now</Button>
                    <Button className="rounded-full" variant="outline">
                        All Products
                    </Button>
                </div>
                <div className="flex items-center justify-center">
                    <Image src={cupImage} alt="cup image" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;