export interface User {
  user: {
    username: string;
  };
}

export interface JWTToken {
  user: User;
  ia: number;
  exp: number;
}
