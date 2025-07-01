import SideThumbnail from './SideThumbnail';

export default function ProductThumbnails() {
    const thumbnails = Array.from({ length: 4 }, (_, index) => ({
        id: index + 1,
        alt: 'Product Thumbnail',
        imageUrl:
            'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg',
    }));
    return (
        <div className="grow-0 shrink-0 basis-[80px] flex flex-col gap-4">
            {thumbnails.map((thumbnail) => (
                <SideThumbnail key={thumbnail.id} {...thumbnail} />
            ))}
        </div>
    );
}
