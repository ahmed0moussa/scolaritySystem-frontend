import { MenuItem } from "./MenuItems";


export class User {
  id?: number;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
  roles?: string[];
  menuItems?:MenuItem[];
  email?: string;
}
