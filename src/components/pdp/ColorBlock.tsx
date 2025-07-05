export default function ColorBlock({ value }: { value: string }) {
    console.log(value);
    return (
        <div
            className={`flex-1 h-10 border flex justify-center items-center`}
            style={{ backgroundColor: value }}
        ></div>
    );
}
