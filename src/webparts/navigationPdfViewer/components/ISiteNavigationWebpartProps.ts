import { PageContext } from "@microsoft/sp-page-context";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ISiteNavigationWebpartProps {
  // ColumnName: string;
  pagectx: PageContext;
  ctx: WebPartContext;
  // siteUrl:string;
  // textcolor:string;
  // choice:string;
  // bgcolor:string;
  // ColumnTitle:string;
  // SubColumnTitle:string;
  // Dropdown:string;
  description:string;
}
