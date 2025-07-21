export default function ProductGallery({ imageUrl }: { imageUrl: string }) {
    return (
        <div
            className="flex-1 h-full flex items-center justify-center"
            data-testid="product-gallery"
        >
            <img
                src={imageUrl}
                alt="Product"
                className="max-w-full max-h-full object-contain"
            />
        </div>
    );
}
