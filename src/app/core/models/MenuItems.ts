import { Item } from "./Item";

export interface MenuItems {
     id:string  ;
     label:string ;
     icon:string ;
     link:string ;
     SubItems:Item[] ;
     active:boolean ;
  }