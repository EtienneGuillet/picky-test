import { Comment } from "../../../../type/comment";
import CommentInfos from "../comment-infos";

type CommentListProps = {
  comments: Comment[];
};

function CommentList({ comments }: CommentListProps) {
  return (
    <div className="flex flex-col gap-6">
      {comments.map((comment, index) => (
        <CommentInfos comment={comment} key={index} />
      ))}
    </div>
  );
}

export default CommentList;
