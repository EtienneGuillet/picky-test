import { Metadata } from "next";
import { notFound } from "next/navigation";
import { DISCUSSIONS } from "../../../const/dicussions";
import CategoryFilters from "../../../modules/category/components/category-filters";
import DiscussionList from "../../../modules/discussion/components/discussion-list";
import { Category } from "../../../type/category";

export const metadata: Metadata = {
  title: "Discussions",
};

type DiscussionPageProps = {
  params: { category: string[] };
};

function DiscussionsPage({ params: { category } }: DiscussionPageProps) {
  if (category && category.length > 1) {
    return notFound();
  }

  const filteredCategory = category
    ? DISCUSSIONS.filter(({ category: { id } }) => String(id) === category[0])
    : DISCUSSIONS;

  const categories = DISCUSSIONS.map(({ category }) => category).reduce<
    Category[]
  >(
    (acc, category) =>
      acc.map(({ id }) => id).includes(category.id) ? acc : [...acc, category],
    []
  );

  return (
    <div className="flex gap-4 max-md:flex-col">
      <CategoryFilters
        categories={categories}
        selectedCategory={category && Number(category[0])}
      />
      <DiscussionList discussions={filteredCategory} />
    </div>
  );
}

export default DiscussionsPage;
