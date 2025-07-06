import { GrNext, GrPrevious } from 'react-icons/gr';
export default function SlidingButtons({
    onNext,
    onPrevious,
}: {
    onNext: () => void;
    onPrevious: () => void;
}) {
    return (
        <>
            <button
                onClick={onNext}
                className="absolute p-2 top-1/2 right-4 text-2xl z-20 bg-black text-white opacity-75"
            >
                <GrNext />
            </button>
            <button
                onClick={onPrevious}
                className="absolute p-2 top-1/2 left-4 xl:left-[120px] text-2xl z-20 bg-black text-white opacity-75"
            >
                <GrPrevious />
            </button>
        </>
    );
}
