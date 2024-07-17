import { Comment } from "../../../../type/comment";
import { Reply } from "../../../../type/reply";
import Content from "../../../common/components/content";
import ReplyList from "../../../reply/component/reply-list";
import StatsCounters from "../../../stats/components/stats-counters";
import UserInfos from "../../../user/components/user-infos";

type CommentInfosProps = {
  comment: Omit<Comment, "replies"> & {
    replies?: Reply[];
  };
};

function CommentInfos({
  comment: { user, content, upvoteCount, commentCount, replies },
}: CommentInfosProps) {
  return (
    <div className="flex flex-col gap-6">
      <UserInfos user={user} />
      <Content>{content}</Content>
      <StatsCounters
        stats={{
          upvoteCount,
          commentCount,
        }}
      />
      {replies && replies.length > 0 && (
        <div className="ml-10">
          <ReplyList replies={replies} />
        </div>
      )}
    </div>
  );
}

export default CommentInfos;
