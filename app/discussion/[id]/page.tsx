import { Metadata } from "next";
import DiscussionCard from "../../../modules/discussion/components/discussion-card";
import { Discussion } from "../../../type/discussion";

export const metadata: Metadata = {
  title: "Discussion",
};

function DiscussionPage() {
  const discussion: Discussion = {
    id: 1,
    title: "N-tier in, bus mainframe cascading device",
    content:
      "DISCUSSION DISCUSSION N-tier in, bus mainframe cascading device, capacitance harmonic services. Ethernet bus, prototype, metafile kilohertz phase connectivity converter potentiometer metafile software backbone device cable.",
    image_urls: [
      "https://picky-app.s3-ap-southeast-1.amazonaws.com/events/2021_02_super/210202_makeprem_0.jpg",
      "https://picky-app.s3-ap-southeast-1.amazonaws.com/events/2021_02_super/210202_makeprem_0.jpg",
      "https://picky-app.s3-ap-southeast-1.amazonaws.com/events/2021_02_super/210202_makeprem_0.jpg",
    ],
    viewCount: 2050,
    upvoteCount: 2050,
    commentCount: 3,
    category: {
      id: 1,
      label: "Skin Concern",
    },
    user: {
      id: 44444,
      image_url:
        "https://www.gopicky.com/_next/image?url=https%3A%2F%2Fmedia.gopicky.com%2Fusers%2F309828-d448857223674b92b2d50dccd3196468.png&w=96&q=75",
      nick_name: "squad",
      skin_type: "Oily/Resilient",
    },
    createdAt: "2021-01-22T18:38:36.000Z",
  };
  return <DiscussionCard discussion={discussion} full />;
}

export default DiscussionPage;
