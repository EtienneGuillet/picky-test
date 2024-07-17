import { Metadata } from "next";
import { notFound } from "next/navigation";
import { DISCUSSIONS } from "../../../const/dicussions";
import DiscussionCard from "../../../modules/discussion/components/discussion-card";

export const metadata: Metadata = {
  title: "Discussion",
};

type DiscussionPageProps = {
  params: {
    id: string;
  };
};

function DiscussionPage({ params: { id } }: DiscussionPageProps) {
  const discussion = DISCUSSIONS.find(
    (discussion) => Number(id) === discussion.id
  );

  if (!discussion) {
    return notFound();
  }

  return <DiscussionCard discussion={discussion} full />;
}

export default DiscussionPage;
