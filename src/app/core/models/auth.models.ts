import { MenuItem } from "src/app/layouts/horizontal-topbar/menu.model";

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
