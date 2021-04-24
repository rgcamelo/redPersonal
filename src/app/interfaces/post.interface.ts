// import { Comment } from './comment.interface';
import { UserObject } from './user.interface';

export interface PostObject {
  count: number;
  next: string;
  results: Post[];
}

export interface Post {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: any;
  posted_text?: string;
  image_url?: string;
  user_id: number;
  user: UserObject;
  group: Group;
  comments?: Comment[];
  reactions?: Reaction[];
}

interface Reaction {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: any;
  user_id: number;
  post_id: number;
  user: UserObject;
}

interface Comment {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: any;
  comment: string;
  user_id: number;
  User: UserObject;
  post_id: number;
}

interface Group {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: any;
  name: string;
  creator_id: number;
}

