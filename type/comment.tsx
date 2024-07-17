import { BaseEntity } from "./base-entity";
import { Reply } from "./reply";

export type Comment = BaseEntity & {
  replies: Reply[];
};
