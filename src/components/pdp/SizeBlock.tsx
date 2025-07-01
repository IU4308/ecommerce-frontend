export default function SizeBlock({ size }: { size: string }) {
    return (
        <div className="flex-1 h-10 border flex justify-center items-center">
            {size}
        </div>
    );
}
