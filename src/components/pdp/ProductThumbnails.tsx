export default function ProductThumbnails({
    thumbnails,
}: {
    thumbnails: string[];
}) {
    return (
        <div className="grow-0 shrink-0 basis-[80px] flex flex-col gap-4">
            {thumbnails.map((imageUrl, index) => (
                <img
                    key={index}
                    src={imageUrl}
                    className="aspect-square object-cover hover:shadow-xl hover:border-1 border-primary"
                />
            ))}
        </div>
    );
}
