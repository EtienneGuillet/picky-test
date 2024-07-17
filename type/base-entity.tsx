import { Category } from "./category";
import { Stats } from "./stats";
import { User } from "./user";

export interface BaseEntity extends Stats {
  id: number;
  content: string;
  image_urls: string[];
  category: Category;
  user: User;
  createdAt: string;
}
