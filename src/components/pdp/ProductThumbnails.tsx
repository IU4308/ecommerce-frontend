import { cn } from 'clsx-for-tailwind';

export default function ProductThumbnails({
    thumbnails,
    imageId,
    handleSelectThumbnail,
}: {
    thumbnails: string[];
    imageId: number;
    handleSelectThumbnail: (id: number) => void;
}) {
    return (
        <div className="hidden grow-0 shrink-0 basis-[80px] xl:flex flex-col gap-4 h-full overflow-auto scrollbar-thin">
            {thumbnails.map((imageUrl, index) => (
                <img
                    key={index}
                    src={imageUrl}
                    className={cn(
                        'aspect-square object-cover hover:shadow-xl hover:border-1 border-primary h-[80px] w-[80px]',
                        {
                            'border-1': imageId === index,
                        }
                    )}
                    onClick={() => handleSelectThumbnail(index)}
                />
            ))}
        </div>
    );
}
