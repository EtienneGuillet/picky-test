import { ReactNode } from "react";
import { User } from "../../../../type/user";
import Badge from "../../../common/components/badge";
import Thumbnail from "../../../common/components/thumbnail";

type UserInfosProps = {
  user: User;
  children?: ReactNode;
};

function UserInfos({
  user: { image_url, nick_name, skin_type },
  children,
}: UserInfosProps) {
  return (
    <div className="flex gap-2">
      <Thumbnail src={image_url} alt={nick_name} />
      <div className="flex flex-col">
        <div className="flex gap-2">
          {nick_name}
          <Badge variant="pill">{skin_type}</Badge>
        </div>
        {children}
      </div>
    </div>
  );
}

export default UserInfos;
