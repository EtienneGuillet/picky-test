import { Category } from "../../../../type/category";
import CategoryLink from "../category-link";

type CategoryFiltersProps = {
  categories: Category[];
  selectedCategory?: number;
};

function CategoryFilters({
  categories,
  selectedCategory,
}: CategoryFiltersProps) {
  return (
    <div className="flex gap-4 h-fit flex-col p-4 border-gray-300 border shadow-sm rounded w-full md:w-80 shrink-0">
      <p className="text-lg font-bold">Categories</p>
      <ul className="flex flex-col gap-2">
        <li>
          <CategoryLink href={"/discussions"} selected={!!!selectedCategory}>
            All categories
          </CategoryLink>
        </li>
        {categories.map(({ id, label }) => (
          <li key={id}>
            <CategoryLink
              selected={id === selectedCategory}
              href={`/discussions/${id}`}
            >
              {label}
            </CategoryLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilters;
