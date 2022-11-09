import { spfi,SPFx } from "@pnp/sp";

import "@pnp/sp/webs";

import "@pnp/sp/lists";

import "@pnp/sp/items";

import { IItemAddResult } from "@pnp/sp/items";

// import {printLogs,logtype} from './LogService';



export const FeedbackService = async (context,title,list) => {

   

    let data = {

      

        UserName: context.pageContext.user.email,

        Date: new Date(),

        Title: title

      }

    

    const sp = spfi("https://170198.sharepoint.com/sites/EMANSITE").using(SPFx(context));

    try{

        var response = await sp.web.lists.getByTitle(list).items.add(data);

        console.log("response added is ", response)

    }

    catch(error)

    {

        console.log("error : ",error);

    }

    

      

      return response;

}