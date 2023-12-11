export interface User {
  username: string;
}

export interface JWTToken {
  username: string;
  ia: number;
  exp: number;
}
