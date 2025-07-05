export default function ProductGallery({ imageUrl }: { imageUrl: string }) {
    return (
        <div className="w-full flex-1 h-[500px] flex items-center justify-center">
            <img
                src={imageUrl}
                className="aspect-square object-cover w-full h-full"
            />
        </div>
    );
}
