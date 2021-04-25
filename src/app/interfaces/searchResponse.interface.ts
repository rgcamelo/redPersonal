export interface SearchResponseObject {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: any;
  name: string;
  email: string;
  password: string;
  avatar: string;
  followed: boolean;
}
