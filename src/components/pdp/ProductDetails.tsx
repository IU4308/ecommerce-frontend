import { useLoaderData } from 'react-router';
import ProductGallery from './ProductGallery';
import ProductOptions from './ProductOptions';
import ProductThumbnails from './ProductThumbnails';
import { useState } from 'react';

export default function ProductDetails() {
    const product = useLoaderData();
    const [currentThumbnail, setCurrentThumbnail] = useState(
        product.gallery[0]
    );
    setCurrentThumbnail(product.gallery[0]);
    // const handleThumbnailClick = (thumbnail: string) => {
    //     setCurrentThumbnail(thumbnail);
    // };
    return (
        <div className="max-md:flex-col flex gap-4 md:gap-8 lg:gap-24">
            <div className="flex gap-8">
                <ProductThumbnails thumbnails={product.gallery} />
                <ProductGallery imageUrl={currentThumbnail} />
            </div>
            <ProductOptions />
        </div>
    );
}
