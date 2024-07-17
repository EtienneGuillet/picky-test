import { Comment } from "./comment";

export type Reply = Omit<Comment, "replies">;
