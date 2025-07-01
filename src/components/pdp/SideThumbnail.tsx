type Thumbnail = {
    id: number;
    alt: string;
    imageUrl: string;
};
export default function SideThumbnail({ imageUrl, alt }: Thumbnail) {
    return (
        <img
            src={imageUrl}
            alt={alt}
            className="aspect-square object-cover hover:shadow-xl hover:border-1 border-primary"
        />
    );
}
