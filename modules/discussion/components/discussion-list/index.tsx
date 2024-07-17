import { Discussion } from "../../../../type/discussion";
import DiscussionCard from "../discussion-card";

type DiscussionListProps = {
  discussions: Discussion[];
};

function DiscussionList({ discussions }: DiscussionListProps) {
  return (
    <div className="flex flex-col gap-2">
      {discussions.map((discussion, index) => (
        <DiscussionCard key={index} discussion={discussion} />
      ))}
    </div>
  );
}

export default DiscussionList;
