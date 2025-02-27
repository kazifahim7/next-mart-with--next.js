'use client';

import { Button } from '@/components/ui/button';
import { IProduct } from '@/types/product';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const DetailsProduct = ({ product }: { product: IProduct }) => {
    if (!product) return <p>Product not found.</p>;

    return (
        <div className='bg-white/70 rounded-3xl my-10 grid grid-cols-2 gap-8'>
            <div>
                <Image src={product.imageUrls?.[0] || '/placeholder.jpg'} alt='image' height={500} width={500} />
                <div className='flex gap-4 items-center mt-3 ml-11'>
                    {product.imageUrls?.map((img) => (
                        <Image className='border' key={img} src={img} alt='image' height={100} width={100} />
                    ))}
                </div>
            </div>

            <div className='bg-white rounded-md p-4'>
                <h2 className='font-bold text-xl mb-4'>{product.name || 'No Name Available'}</h2>
                <p className='text-justify text-gray-500 font-light text-sm'>
                    {product.description || 'No description available.'}
                </p>
                <div className='flex items-center justify-between my-5 text-gray-500 text-xs'>
                    <p className='rounded-full px-4 py-1 bg-gray-100 flex items-center justify-center gap-1'>
                        <Star className='w-4 h-4' fill='orange' stroke='orange' />
                        {product.averageRating ?? 'No'} Ratings
                    </p>
                    <p className='rounded-full px-4 py-1 bg-gray-100'>
                        Stock: {product.stock ?? 'N/A'}
                    </p>
                    <p className='rounded-full px-4 py-1 bg-gray-100'>
                        Brand: {product.brand?.name || 'Unknown'}
                    </p>
                    <p className='rounded-full px-4 py-1 bg-gray-100'>
                        Category: {product.category?.name || 'Unknown'}
                    </p>
                </div>
                <hr />
                <p className='my-2 font-bold'>
                    Price: {product.offerPrice ? (
                        <>
                            <span className='font-semibold mr-2 text-orange-400'>
                                $ {product.offerPrice}
                            </span>
                            <del className='font-semibold text-xs'>$ {product.price}</del>
                        </>
                    ) : (
                        <span className='font-semibold'>$ {product.price ?? 'N/A'}</span>
                    )}
                </p>
                <hr />
                <Button variant='outline' className='w-full my-5'>
                    Add To Cart
                </Button>
                <Button className='w-full'>Buy Now</Button>
            </div>
        </div>
    );
};

export default DetailsProduct;
