import { Stats } from "../../../../type/stats";
import StatsCounter from "../stats-counter";

type StatsCountersProps = {
  stats: Omit<Stats, "viewCount">;
};

function StatsCounters({
  stats: { upvoteCount, commentCount },
}: StatsCountersProps) {
  return (
    <div className="flex gap-2">
      <StatsCounter
        iconUrl={"/images/icon-upvote-14-px@3x.png"}
        alt={"Upvotes"}
        statsCount={upvoteCount}
      />
      <StatsCounter
        iconUrl={"/images/icon-comment-14-px@3x.png"}
        alt={"Comments"}
        statsCount={commentCount}
      />
      <StatsCounter
        iconUrl={"/images/icon-bookmark-14-px@3x.png"}
        alt={"Bookmark"}
      />
    </div>
  );
}

export default StatsCounters;
