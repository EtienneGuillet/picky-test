import { Metadata } from "next";
import {
  ADDITIONAL_GUIDELINES,
  ASSIGNEMENT_INSTRUCTIONS,
} from "../const/assignement";
import AssignementTopic from "../modules/assignement/components/assignement-topic";
import List from "../modules/common/components/list";
import OrderedList from "../modules/common/components/ordered-list";
import SectionHeader from "../modules/layout/components/section-header";

export const metadata: Metadata = {
  title: "Assignement",
};

export default function Home() {
  return (
    <>
      <SectionHeader
        className="border-b border-gray-700"
        title={"Frontend Assignment: Discussion Page"}
      />
      <h2 className="py-1 font-semibold text-2xl border-b border-gray-700">
        Assessment Instructions
      </h2>
      <AssignementTopic title={"Overview"}>
        Your task is to create a discussion page using either React.js or
        Next.js. This page will display discussion content using provided JSON
        data. The design and features are up to your creativity but should
        ensure a good user experience across different devices.
      </AssignementTopic>
      <AssignementTopic title={"Instructions"}>
        <OrderedList items={ASSIGNEMENT_INSTRUCTIONS} />
      </AssignementTopic>
      <AssignementTopic title={"Additional Guidelines"}>
        <List items={ADDITIONAL_GUIDELINES}></List>
      </AssignementTopic>
    </>
  );
}
