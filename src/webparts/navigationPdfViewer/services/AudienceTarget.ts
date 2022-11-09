import {spfi, SPFx} from '@pnp/sp'

import "@pnp/sp/search";
import { ISearchQuery, SearchResults, SearchQueryBuilder } from "@pnp/sp/search";
// import {
//     SPHttpClient,
//     SPHttpClientResponse
//   } from '@microsoft/sp-http';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/items/get-all";
import { Web } from "@pnp/sp/webs";
export const AudienceTarget=async(weburl,listname,context)=>
{

  console.log(context)
  console.log(context.pageContext.list.serverRelativeUrl)
    const sp=spfi(weburl).using(SPFx(context))
    console.log(sp.search)
    console.log(weburl+"//Lists/DocumentLibraryList/AllItems.aspx")
var results=await sp.search({
 QueryTemplate: 'ParentLink: "'+weburl+'/Lists/DocumentLibraryList/AllItems.aspx" (ModernAudienceAadObjectIds:{User.Audiences} OR NOT IsAudienceTargeted:true)',
  Querytext: "*",
  SelectProperties:[
    "Title",
    "DocLibraryLink",
    "ListName"
  ]

})
console.log("results query",results.PrimarySearchResults)
if(results.PrimarySearchResults.length!=0)
return results.PrimarySearchResults;
else
return null;
}