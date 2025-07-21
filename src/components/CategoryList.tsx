import { useLoaderData } from 'react-router';
import Category from './Category';

export default function CategoryList() {
    const categories = useLoaderData() as { name: string }[];
    return (
        <div className="flex items-center gap-4">
            {categories.map((category) => (
                <Category key={category.name} name={category.name} />
            ))}
        </div>
    );
}
