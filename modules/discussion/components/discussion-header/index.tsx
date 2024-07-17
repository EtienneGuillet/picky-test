import { Category } from "../../../../type/category";
import { User } from "../../../../type/user";
import { formatDate } from "../../../../utils/date";
import Badge from "../../../common/components/badge";
import UserInfos from "../../../user/components/user-infos";

type DiscussionHeader = {
  category: Category;
  user: User;
  createdAt: string;
  viewCount: number;
};

function DiscussionHeader({
  category,
  user,
  createdAt,
  viewCount,
}: DiscussionHeader) {
  return (
    <div className="flex flex-col gap-2">
      <Badge className="transition-colors">{category.label}</Badge>
      <UserInfos user={user}>
        <div className="flex gap-2 text-gray-700 text-xs">
          <div>{formatDate(createdAt)}</div>
          <div>{viewCount} Views</div>
        </div>
      </UserInfos>
    </div>
  );
}

export default DiscussionHeader;
