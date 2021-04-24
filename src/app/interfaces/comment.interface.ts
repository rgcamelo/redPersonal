import { User } from "./login.interface";

export interface Comment {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: any;
  comment: string;
  user_id: number;
  User: User;
  post_id: number;
}

