import ProductGallery from './ProductGallery';
import ProductOptions from './ProductOptions';
import ProductThumbnails from './ProductThumbnails';

export default function ProductDetails() {
    return (
        <div className="max-md:flex-col flex gap-4 md:gap-8 lg:gap-24">
            <div className="flex gap-8">
                <ProductThumbnails />
                <ProductGallery />
            </div>
            <ProductOptions />
        </div>
    );
}
