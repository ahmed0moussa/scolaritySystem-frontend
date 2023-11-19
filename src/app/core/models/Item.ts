import { SubItem } from "./SubItem";

export interface Item {
    id:string;
    label:string;
    link:string ;
    SubItems:SubItem[] ;
    active:boolean ;
 }