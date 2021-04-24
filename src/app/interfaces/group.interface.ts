import { UserObject } from "./user.interface";

export interface GroupObject {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: any;
  name: string;
  description: string;
  imageUrl: string;
  creator_id: number;
  users: UserObject[];
}

