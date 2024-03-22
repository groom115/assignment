export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface User {
  gender: string;
  email: string;
  name: Name;
  phone: string;
  cell: string;
}

export interface Users {
  results: User[];
}
