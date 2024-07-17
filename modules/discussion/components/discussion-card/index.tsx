import { COMMENTS } from "../../../../const/comments";
import { Discussion } from "../../../../type/discussion";
import { clx } from "../../../../utils/clx";
import CommentList from "../../../comment/components/comment-list";
import Carousel from "../../../common/components/carousel";
import ConditionalLink from "../../../common/components/conditional-link";
import Content from "../../../common/components/content";
import DiscussionHeader from "../discussion-header";

type DiscussionCardProps = {
  discussion: Discussion;
  full?: boolean;
};

function DiscussionCard({
  discussion: {
    title,
    content,
    user,
    category,
    createdAt,
    viewCount,
    id,
    image_urls,
    commentCount,
  },
  full,
}: DiscussionCardProps) {
  return (
    <div className="flex flex-col gap-2 border border-gray-300 shadow-sm rounded">
      <div className="p-4 flex flex-col gap-2">
        <DiscussionHeader
          user={user}
          category={category}
          createdAt={createdAt}
          viewCount={viewCount}
        />
        <ConditionalLink
          className="flex flex-col gap-2 group"
          href={full ? undefined : `/discussion/${id}`}
        >
          <h3
            className={clx("text-black text-lg ", {
              "group-hover:underline": !full,
            })}
          >
            {title}
          </h3>
          <Content>{content}</Content>
        </ConditionalLink>
        <Carousel image_urls={image_urls} />
      </div>
      {full && (
        <>
          <div className="bg-gray-900 px-4 py-3 text-xs font-semibold text-gray-500">
            {commentCount} Comments
          </div>
          <div className="p-4">
            <CommentList comments={COMMENTS} />
          </div>
        </>
      )}
    </div>
  );
}

export default DiscussionCard;
