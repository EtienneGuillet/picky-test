import { BaseEntity } from "./base-entity";

export type Discussion = BaseEntity & {
  title: string;
};
