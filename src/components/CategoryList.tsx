import { useLoaderData } from 'react-router';
import { useCategoryStore } from '../store/useCategoryStore';
import Category from './Category';

export default function CategoryList() {
    const categories = useLoaderData() as { name: string }[];
    const { activeCategory, setActiveCategory } = useCategoryStore();

    if (!activeCategory) {
        setActiveCategory(categories[0].name);
    }
    return (
        <div className="flex items-center gap-4">
            {categories.map((category) => (
                <Category
                    key={category.name}
                    name={category.name}
                    activeCategory={activeCategory!}
                    onClick={setActiveCategory}
                />
            ))}
        </div>
    );
}
