export default function TextBlock({ value }: { value: string }) {
    return (
        <div className="flex-1 h-10 border flex justify-center items-center">
            {value}
        </div>
    );
}
