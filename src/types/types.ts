export interface User {
  username: string;
}

export interface JWTToken {
  user: User;
  ia: number;
  exp: number;
}
