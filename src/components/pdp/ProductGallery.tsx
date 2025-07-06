export default function ProductGallery({ imageUrl }: { imageUrl: string }) {
    return (
        <div className="flex-1 h-full overflow-hidden xl:overflow-auto scrollbar-thin">
            <div className="w-full h-full xl:w-max xl:h-max xl:min-w-full xl:min-h-full ">
                <img
                    src={imageUrl}
                    className="object-contain max-w-full max-h-full xl:max-w-none xl:max-h-none "
                    alt="Product"
                />
            </div>
        </div>
    );
}
