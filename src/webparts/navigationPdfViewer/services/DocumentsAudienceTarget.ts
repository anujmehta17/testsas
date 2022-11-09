import {spfi, SPFx} from '@pnp/sp'

import "@pnp/sp/search";
import { ISearchQuery, SearchResults, SearchQueryBuilder, SortDirection } from "@pnp/sp/search";
// import {
//     SPHttpClient,
//     SPHttpClientResponse
//   } from '@microsoft/sp-http';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/items/get-all";
import { Web } from "@pnp/sp/webs";
export const DocumentsAudienceTarget=async(weburl,listname,context,res)=>
{

  console.log(context)
  console.log(context.pageContext.list.serverRelativeUrl)
    const sp=spfi(weburl).using(SPFx(context))
    console.log(sp.search({ QueryTemplate:'ParentLink: "'+weburl+'AllItems.aspx" contentclass:"STS_ListItem_GenericList" (ModernAudienceAadObjectIds:{User.Audiences} OR NOT IsAudienceTargeted:true)'}))
    console.log(weburl)
   console.log( "sp list ",await sp.web.lists)
var results=await sp.search({
 QueryTemplate: 'ParentLink: "'+weburl+'/Lists/'+listname+'/AllItems.aspx" contentclass:"STS_ListItem_GenericList" (ModernAudienceAadObjectIds:{User.Audiences} OR NOT IsAudienceTargeted:true)',
 Querytext: "*",
  SelectProperties:[
    "Title",
    "Operator",
    "RevNo",
    "RevDate",
    "DocumentUrl",
    "DocumentDescription"
  ],
  
  SortList:[{

    Property:'Created',

    Direction:SortDirection.Descending

  }]

})
console.log("results query",results.PrimarySearchResults)
if(results.PrimarySearchResults.length!=0)
res( results.PrimarySearchResults);
else
return null;
}