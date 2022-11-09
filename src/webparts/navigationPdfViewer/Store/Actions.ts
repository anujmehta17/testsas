const linkclick="linkclick";

export function linkclicked(index,url)
 {
     console.log("inside submenu", index)
     return {
         type:linkclick,
         payload:
         {
             index:index,
             url:url
         }
        }
 }