export interface LoginObject {
  token: string;
  user: User;
}

export interface User {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt?: any;
  name: string;
  email: string;
  avatar: string;
}
