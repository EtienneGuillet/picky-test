"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Reply } from "../../../../type/reply";
import CommentInfos from "../../../comment/components/comment-infos";

type ReplyListProps = {
  replies: Reply[];
};

function ReplyList({ replies }: ReplyListProps) {
  const initialReply = replies?.[0];

  return (
    initialReply && (
      <div className="flex flex-col gap-4">
        <CommentInfos comment={initialReply} />
        {replies.length > 1 && (
          <Disclosure>
            {({ open }) => (
              <>
                <DisclosurePanel
                  transition
                  className="flex flex-col gap-4 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                >
                  {replies.map(
                    (reply, index) =>
                      index > 1 && <CommentInfos key={index} comment={reply} />
                  )}
                </DisclosurePanel>
                <DisclosureButton className="w-fit transition-colors hover:bg-gray-300 p-1 rounded">
                  {open
                    ? "View less replies"
                    : `View ${replies.length - 1} more replies`}
                </DisclosureButton>
              </>
            )}
          </Disclosure>
        )}
      </div>
    )
  );
}

export default ReplyList;
