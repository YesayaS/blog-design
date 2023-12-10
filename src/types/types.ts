export interface User {
  user: { username: string };
}

export interface JWTToken {
  username: string;
  ia: number;
  exp: number;
}
