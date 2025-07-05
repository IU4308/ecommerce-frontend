import { useLoaderData } from 'react-router';
import ProductGallery from './ProductGallery';
import ProductOptions from './ProductOptions';
import ProductThumbnails from './ProductThumbnails';
import { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

export default function ProductDetails() {
    const product = useLoaderData();
    const thumbnails = product.gallery || [];
    const [currentImageId, setCurrentImageId] = useState(0);

    const handleSelectThumbnail = (id: number) => {
        setCurrentImageId(id);
    };

    const handleNextThumbnail = () => {
        setCurrentImageId((id) => (id + 1) % thumbnails.length);
    };

    const handlePreviousThumbnail = () => {
        setCurrentImageId(
            (id) => (id - 1 + thumbnails.length) % thumbnails.length
        );
    };

    return (
        <div className="flex max-xl:flex-col w-full h-full xl:h-[600px]">
            <div className="relative flex xl:flex-row flex-col flex-grow xl:h-full max-xl:max-h-[400px] overflow-hidden gap-4">
                <ProductThumbnails
                    thumbnails={thumbnails}
                    imageId={currentImageId}
                    handleSelectThumbnail={handleSelectThumbnail}
                />
                <ProductGallery imageUrl={thumbnails[currentImageId]} />
                <button
                    onClick={handleNextThumbnail}
                    className="absolute p-2 top-1/2 right-4 text-2xl z-20 bg-black text-white opacity-75"
                >
                    <GrNext />
                </button>
                <button
                    onClick={handlePreviousThumbnail}
                    className="absolute p-2 top-1/2 left-4 xl:left-[120px] text-2xl z-20 bg-black text-white opacity-75"
                >
                    <GrPrevious />
                </button>
            </div>

            <div className="w-full xl:w-[350px] shrink-0 overflow-auto px-4">
                <ProductOptions />
            </div>
        </div>
    );
}
